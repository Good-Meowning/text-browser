import { BlessedClient } from "blessed-client";

function main() {
  // Args [0]=node, [1]=apps.ts, [2]=URL
  const args = process.argv;

  // Exit app iff invalid parameters
  if (!args[2]) return console.log("Usage: npm start <url>");
  const url = args[2];

  // Create browser client
  const blessedClient = new BlessedClient();
  blessedClient.visitURL(url);
}

main();
