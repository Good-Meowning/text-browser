import * as cheerio from "cheerio";
import { isComment, isTag, isText } from "domhandler";
import { escape } from "blessed";
import { getHTMLString, ParsedData, ParsedURL } from "backend-class";

/**
 * Parse URL into a ParsedURL object
 * @param url
 * @returns ParsedURL
 */
export function getParsedURL(url: string): ParsedURL {
  // URL is file path
  if (url.match("^file://.+")) return { url: url, filepath: url.slice(7) };

  // Force URL with unspecified protocol with HTTP
  if (!url.match("^http[s]?://.+")) url = `http://${url}`;

  // Make URL object
  const newURL = new URL(url);

  // Verify URL is HTTP/HTTPS
  if (!newURL.protocol.toLowerCase().match("^http[s]?:$"))
    throw new Error(
      `Invalid protocol for URL: ${newURL.protocol.toLowerCase()}, ${newURL}`
    );

  // Extract attributes
  return { url: newURL.href };
}

/**
 * Get and parse the HTML data at URL
 * @param parsedURL
 * @returns cheerio.Element of the body tag of given HTML
 */
export async function getBodyElement(parsedURL: ParsedURL) {
  // Fetch HTML string
  const data = await getHTMLString(parsedURL);
  const tree = cheerio.load(data);

  // Extract only "body" element node
  const bodyNode = tree("body").get(0);
  return bodyNode;
}

/**
 * Parse the tree starting at the given node
 * @param node starting node
 * @returns ParsedData
 */
export function parseTree(
  node: cheerio.Node | null,
  parsedURL: ParsedURL,
  selectedURL: number = 0,
  prevURL: number = 0
): ParsedData {
  // Node is null or HTML comment
  if (!node || isComment(node)) return { parsedData: "", urls: [] };

  // Node is only text
  // Trim each line and rejoin non-empty lines with spaces
  if (isText(node)) {
    const escapedData = escape(node.data);
    const splitLines = escapedData.split(/[\r\n]+/);
    const trimmedLines = splitLines.map((s) => s.trim());
    const filteredLines = trimmedLines.filter((s) => s);
    const joinedLines = filteredLines.join(" ");
    return { parsedData: joinedLines, urls: [] };
  }

  // Node is HTML tag
  if (isTag(node)) {
    // Ignore CSS and JavaScript
    if (node.type === "style" || node.type === "script")
      return { parsedData: "", urls: [] };

    let prefix = "";
    let suffix = "";
    const urls: string[] = [];

    switch (node.tagName.toLowerCase()) {
      case "i":
        prefix = "{inverse}";
        suffix = "{/inverse}";
        break;

      case "a":
        const href = node.attribs["href"] ? node.attribs["href"] : "";

        // Add number to href
        suffix = `[${prevURL + urls.length}]("${href}")`;

        // Check if this URL is currently selected and add bg colour
        if (prevURL + urls.length === selectedURL) {
          prefix = "{red-bg}";
          suffix += "{/red-bg}";
        } else {
          prefix = "{blue-bg}";
          suffix += "{/blue-bg}";
        }

        // Append to list of URLs
        urls.push(href);
      // Add underline prefix and suffix
      case "u":
        prefix = "{underline}" + prefix;
        suffix += "{/underline}";
        break;

      case "blink":
        prefix = "{blink}";
        suffix = "{/blink}";
        break;

      case "b":
        prefix = "{bold}";
        suffix = "{/bold}";
        break;

      // These tags all need newline suffix
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        prefix = "{bold}";
        suffix = "{/bold}";
      case "div":
      case "p":
      case "br":
      case "hr":
      case "header":
      case "footer":
      case "ul":
      case "li":
      case "canvas":
      case "form":
        suffix += "\n\n";

      default:
        break;
    }

    // Traverse tree for text with DFS
    let parsedData = "";
    node.childNodes.forEach((childNode) => {
      // Parse data for child node
      const nextParsedData = parseTree(
        childNode,
        parsedURL,
        selectedURL,
        prevURL + urls.length
      );

      // Add space separator between children node texts
      if (
        parsedData &&
        nextParsedData.parsedData &&
        parsedData.match(/\S$/) &&
        nextParsedData.parsedData.match(/^\S/)
      ) {
        parsedData += " ";
      }

      // Store parsed data
      parsedData += nextParsedData.parsedData;

      // Store anchor tag URLs
      urls.push(...nextParsedData.urls);
    });

    return { parsedData: prefix + parsedData + suffix, urls: urls };
  }

  // Node is neither text nor HTML tag
  throw new Error(`Invalid node type: ${node}`);
}

/**
 * Parse href into string that accounts for URL
 * @param parsedURL
 * @param href
 * @returns parsed href string
 */
export function getParsedHref(parsedURL: ParsedURL, href: string) {
  // Empty href
  if (!href) return "";

  // Return entire href if it is a file path
  if (href.startsWith("file://")) return href;

  try {
    // Use URL to edit existing URL
    const newURL = new URL(href, parsedURL.url);

    // Only accept HTTP/HTTPS
    if (!newURL.protocol.match(/^http[s]?/)) return "";

    return newURL.href;
  } catch (_error) {
    return "";
  }
}
