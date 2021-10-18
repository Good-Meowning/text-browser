/* 
    This file is purely for testing the utilities in back-end class module before we have a functioning UI.
*/

import { getWebContentTree, getLocalContentTree } from "./data-fetcher";

async function run() {
  const args = process.argv;
  if (args.length > 2 && args.length < 5) {
    const url = args[2];
    const isLocal = args[3] === "local";
    try {
      console.log(isLocal);
      const tree = isLocal
        ? await getLocalContentTree(url)
        : await getWebContentTree(url);
      /* console.log(tree.html()) //if you want to see raw html content */
    } catch (err) {
      //If axios request responds with non 200
      console.log(err.response);
    }
  } else {
    console.log("Usage: npm run backend <url> <isLocal> ");
  }
}

run();
