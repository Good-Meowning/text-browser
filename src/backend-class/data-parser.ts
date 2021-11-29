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
  if (url.startsWith("file://")) return { url: url, filepath: url.slice(7) };

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
  return {
    url: url,
    origin: newURL.origin,
    href: newURL.href,
    pathname: newURL.pathname
  };
}

/**
 * Get and parse the HTML data at URL
 * @param parsedURL
 * @returns
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
  if (isText(node)) return { parsedData: escape(node.data), urls: [] };

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
        if (node.attribs["href"]) {
          // Add number to href
          suffix = `[${prevURL + urls.length}](${node.attribs["href"]})`;

          // Check if this URL is currently selected and add bg colour
          if (prevURL + urls.length === selectedURL) {
            prefix = "{red-bg}";
            suffix += "{/red-bg}";
          } else {
            prefix = "{blue-bg}";
            suffix += "{/blue-bg}";
          }

          // Append to list of URLs
          urls.push(node.attribs["href"]);
        }
      case "u":
        prefix = "{underline}" + prefix;
        suffix += "{/underline}";
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

    // Traverse tree for text with DFS
    let parsedData = "";
    node.childNodes.forEach((childNode) => {
      const nextParsedData = parseTree(
        childNode,
        parsedURL,
        selectedURL,
        prevURL + urls.length
      );
      parsedData += nextParsedData.parsedData;
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

  // Full URL: href is full URL
  if (href.startsWith("file://") || href.match("^http[s]?://.+")) return href;

  // Base URL is not HTTP/HTTPS: not supported
  if (!parsedURL.url.match("^http[s]?://.+$")) return "";

  // ID: append id to href
  if (href.startsWith("#")) return `${parsedURL.href}${href}`;

  // Root path: append href to origin
  if (href.startsWith("/")) return `${parsedURL.origin}/${href}`;

  // Otherwise: append href path to URL
  const pathname = parsedURL.pathname ? parsedURL.pathname : "";
  return `${parsedURL.origin}/${pathname.replace(/\/.*/, "")}/${href}`;
}
