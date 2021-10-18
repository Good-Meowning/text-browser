import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";

export async function getWebContentTree(url: string) {
  const res = await axios.get(url);
  return cheerio.load(res.data);
}

export async function getLocalContentTree(path: string) {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    return cheerio.load(data);
  });
}
