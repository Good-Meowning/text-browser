import { BlessedClient } from "blessed-client";

function main() {
  // Args [0]=node, [1]=apps.ts, [2]=URL
  const args = process.argv;

  // Exit app iff invalid parameters
  if ("-h" in args || "--help" in args)
    return console.log("Usage: npm start <optional URL>");

  // Create browser client
  const blessedClient = new BlessedClient();

  // Visit URL if provided
  if (args[2]) blessedClient.visitURL(args[2]);
}

main();
