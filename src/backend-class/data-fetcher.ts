import axios from "axios";
import { ParsedURL } from "backend-class";
import * as fs from "fs/promises";

/**
 * Parses an URL to fetch local file or web file
 * @param url
 * @returns string of HTML
 */
export async function getHTMLString(url: ParsedURL) {
  if (url.filepath) {
    // File path
    return await getLocalContentData(url.filepath);
  } else {
    // URL with specified HTTP/HTTPS
    return await getWebContentData(url.url);
  }
}

/**
 * Gets the HTML string from the URL
 * @param url
 * @returns string of HTML
 */
async function getWebContentData(url: string) {
  const res = await axios.get(url);
  return res.data;
}

/**
 * Gets the HTML string from the file path
 * @param path
 * @returns string of HTML
 */
async function getLocalContentData(path: string) {
  const data = await fs.readFile(path, "utf-8");
  return data;
}
