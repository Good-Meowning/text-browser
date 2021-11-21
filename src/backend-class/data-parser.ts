import * as cheerio from "cheerio";
import { isComment, isTag, isText } from "domhandler";
import { escape } from "blessed";
import { getData } from "backend-class";

export interface ParsedData {
  data: string;
  rawdata: string;
  metadata: { [key: number]: string };
}

/**
 * Get and parse the HTML data at URL
 * @param url
 * @returns ParsedData
 */
export async function getParsedData(url: string) {
  const data = await getData(url);
  const tree = cheerio.load(data);

  // Set initial node to the one "body" node
  const bodyNode = tree("body").get(0);
  const result = parseTree(bodyNode);
  return result;
}

/**
 * Parse the tree starting at the given node
 * @param node starting node
 * @returns ParsedData
 */
function parseTree(node: cheerio.Node | null): ParsedData {
  // Node is null or HTML comment
  if (!node || isComment(node)) return { data: "", rawdata: "", metadata: {} };

  // Node is only text
  if (isText(node))
    return {
      data: escape(node.data),
      rawdata: escape(node.data),
      metadata: {}
    };

  // Node is HTML tag
  if (isTag(node)) {
    // Ignore CSS and JavaScript
    if (node.type === "style" || node.type === "script")
      return { data: "", rawdata: "", metadata: {} };

    let prefix = "";
    let suffix = "";
    let href = "";

    switch (node.tagName.toLowerCase()) {
      case "i":
        prefix = "{inverse}";
        suffix = "{/inverse}";
        break;

      case "a":
        href = node.attribs["href"];
      case "u":
        prefix = "{underline}";
        suffix = "{/underline}";
        break;

      case "blink":
        prefix = "{blink}";
        suffix = "{/blink}";
        break;

      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "b":
        prefix = "{bold}";
        suffix = "{/bold}";
        break;

      default:
        break;
    }

    // Create empty ParsedData
    let parsedData: ParsedData = { data: "", rawdata: "", metadata: {} };

    // Traverse tree for text with DFS
    parsedData.data += prefix;
    //parsedData.rawdata += ?.length
    node.childNodes.forEach((childNode) => {
      let nextParsedData = parseTree(childNode);
      // for (const key in nextParsedData.metadata) {
      //   // nextParsedData.metadata[key] += ?
      // }
      parsedData.data += nextParsedData.data;
    });
    parsedData.data += suffix;

    return parsedData;
  }

  // Node is neither text nor HTML tag
  throw new Error(`Invalid node type: ${node}`);
}
