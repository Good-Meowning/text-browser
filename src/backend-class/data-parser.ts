import * as cheerio from "cheerio";
import { getData } from "backend-class";
import { isTag, isText } from "domhandler";

/**
 * Get and parse the HTML data at URL
 * @param url 
 * @param isLocal 
 * @returns string of parsed data
 */
export async function getParsedData(url: string, isLocal: boolean) {
  const data = await getData(url, isLocal);
  const tree = cheerio.load(data);

  // Set initial node to the one "body" node
  const bodyNode = tree("body").get(0);
  const result = parseTree(bodyNode);
  return result;
}

function a(result: string[], currentNode: cheerio.Node) {
  result.push(parseTree(currentNode));
  return result;
}

/**
 * Parse the tree starting at the given node
 * @param node starting node
 * @returns string containing parsed tree text
 */
function parseTree(node: cheerio.Node | null): string {
  // Node is null
  if (!node) return "";

  // Node is only text
  if (isText(node)) return node.data;

  // Node is HTML tag
  if (isTag(node)) {
    // Traverse tree for text with DFS
    return node.childNodes.reduce(
      (result, currentNode) => result + parseTree(currentNode),
      ""
    );

    // TODO: uhhhhh
    // let result = "";
    // for (const child of node.childNodes) {
    //   result += parseTree(child);
    // }
    // return result;
  }

  // Node is neither text nor HTML tag
  throw new Error(`Invalid node type: ${node}`);
}
