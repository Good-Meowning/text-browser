import * as cheerio from "cheerio";
import { isComment, isTag, isText } from "domhandler";
import { escape } from "blessed";
import { getData } from "backend-class";

/**
 * Get and parse the HTML data at URL
 * @param url
 * @returns string of parsed data
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
 * @returns string containing parsed tree text
 */
function parseTree(node: cheerio.Node | null): string {
  // Node is null or HTML comment
  if (!node || isComment(node)) return "";

  // Node is only text
  if (isText(node)) return escape(node.data);

  // Node is HTML tag
  if (isTag(node)) {
    // Ignore CSS and JavaScript
    if (node.type === "style" || node.type === "script") return "";

    let prefix = "";
    let postfix = "";

    switch (node.tagName.toLowerCase()) {
      case "i":
        prefix = "{inverse}";
        postfix = "{/inverse}";
        break;

      case "u":
        prefix = "{underline}";
        postfix = "{/underline}";
        break;

      case "blink":
        prefix = "{blink}";
        postfix = "{/blink}";
        break;

      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
      case "b":
        prefix = "{bold}";
        postfix = "{/bold}";
        break;

      default:
        break;
    }

    // Traverse tree for text with DFS
    return node.childNodes.reduce(
      (result, currentNode) =>
        prefix + result + parseTree(currentNode) + postfix,
      ""
    );
  }

  // Node is neither text nor HTML tag
  throw new Error(`Invalid node type: ${node}`);
}
