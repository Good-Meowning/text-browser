import { BlessedClient } from "blessed-client";

// // TODO: delete testing
// import { getParsedData } from "backend-class";

function main() {
  // Args [0]=node, [1]=apps.ts, [2]=URL
  const args = process.argv;

  // Exit app iff invalid parameters
  if (!args[2]) return console.log("Usage: npm start <url>");
  const url = args[2];

  // // TODO: delete testing
  // getParsedData(url).then(console.log).catch(console.error);

  // Create browser client
  const blessedClient = new BlessedClient();
  blessedClient.visitURL(url);
}

main();
