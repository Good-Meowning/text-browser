import { getParsedData } from "backend-class";
import { BlessedClient } from "blessed-client";

function main() {
  // Args 0=node, 1=apps.ts, 2=URL, 3=isLocal
  const args = process.argv;

  // Exit app iff invalid parameters
  if (args.length <= 2 || args.length >= 5)
    return console.log("Usage: npm start <url> <isLocal>");

  // Parse parameters with template strings for security
  const url = args[2];
  const isLocal = args[3] === "local";

  // Test parsing of data
  // getParsedData(url, isLocal)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));

  const blessedClient = new BlessedClient();
  blessedClient.visitURL(url, isLocal);
}

main();
