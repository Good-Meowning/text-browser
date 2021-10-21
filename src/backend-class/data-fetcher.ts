import axios from "axios";
import * as fs from "fs/promises";

/**
 * Parses an URL to fetch local file or web file
 * TODO: check discussion at
 * https://discord.com/channels/889001266703917158/899742168149807185
 */
export async function getData(url: string, isLocal: boolean) {
  // TODO: discuss URL handling

  // const fileRegex = "^file://(.+)$";
  // const httpRegex = "^http[s]?://.+$";

  // if (url.match(fileRegex)) {
  //   url = url.slice(7);
  //   return await getLocalContentData(url);
  // } else if (url.match(httpRegex)) {
  //   return await getWebContentData(url);
  // } else {
  //   throw new Error(`Invalid URL: ${url}`);
  // }

  const data = isLocal
    ? await getLocalContentData(url)
    : await getWebContentData(url);
  return data;
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
