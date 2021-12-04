import {
  getBodyElement,
  getParsedHref,
  getParsedURL,
  parseTree
} from "backend-class";
import * as cheerio from "cheerio";

export interface ParsedURL {
  url: string;
  filepath?: string;
}

export interface ParsedData {
  parsedData: string;
  urls: string[];
}

export class DataServer {
  private parsedURL?: ParsedURL;
  private bodyNode?: cheerio.Element;
  private currentURLIndex = 0;
  private anchorURLs: string[] = [];

  /**
   * Set the class attributes using the HTML data at URL
   * @param url
   */
  public async visitURL(url: string) {
    if (!url) throw new Error("Invalid URL: empty");

    // Parse and set URL
    this.parsedURL = getParsedURL(url);

    // Parse and get "body" node of tree
    this.bodyNode = await getBodyElement(this.parsedURL);

    // Reset attributes
    this.currentURLIndex = 0;
    this.anchorURLs = [];
  }

  /**
   * Render HTML data at URL
   * @param indexChange
   * @returns string of parsed HTML
   */
  public renderPage(indexChange = 0) {
    // Update URL index if there are anchor tag URLs
    const lenURLs = this.anchorURLs.length;
    if (lenURLs > 0) {
      const newURLIndex = this.currentURLIndex + indexChange;
      // Cool mod trick https://stackoverflow.com/a/54427125
      this.currentURLIndex = ((newURLIndex % lenURLs) + lenURLs) % lenURLs;
    }

    if (this.bodyNode && this.parsedURL) {
      // Parse HTML tree if it is defined
      const parsedData = parseTree(
        this.bodyNode,
        this.parsedURL,
        this.currentURLIndex
      );
      this.anchorURLs = parsedData.urls;
      return [parsedData.parsedData, this.parsedURL.url];
    } else {
      // Otherwise return empty string
      return ["", ""];
    }
  }

  /**
   * Get the href URL at specified index
   * @param index
   * @returns string href URL
   */
  public getHrefURL(index = this.currentURLIndex) {
    // Index out of bounds
    if (index < 0 || this.anchorURLs.length <= index) return "";

    // Undefined parsed URL
    if (!this.parsedURL) return "";

    return getParsedHref(this.parsedURL, this.anchorURLs[index]);
  }
}
