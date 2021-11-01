import axios from "axios";
import * as fs from "fs/promises";

/**
 * Parses an URL to fetch local file or web file
 * @param url
 * @returns string of HTML
 */
export async function getData(url: string) {
  const fileRegex = "^file://.+$";
  const httpRegex = "^http[s]?://.+$";

  if (url.match(fileRegex)) {
    // File path
    url = url.slice(7);
    return await getLocalContentData(url);
  } else if (url.match(httpRegex)) {
    // URL with specified HTTP/HTTPS
    return await getWebContentData(url);
  } else {
    // URL with unspecified HTTP/HTTPS
    return await getWebContentData(`http://${url}`);
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
