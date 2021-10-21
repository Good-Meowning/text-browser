import blessed from "blessed";
import { getParsedData } from "backend-class";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private box: blessed.Widgets.BoxElement;

  /**
   * Creates a screen object and a box element
   */
  constructor() {
    this.screen = this.initiateScreen();
    this.box = this.initiateBox();

    // Append our box to the screen
    this.screen.append(this.box);
  }

  /**
   * Initiates the screen
   */
  private initiateScreen() {
    // Create a screen object
    const screen = blessed.screen({
      smartCSR: true,
    });

    // Set screen title
    screen.title = "Good Meowning!";

    // Quit on Escape, q, or Control-C
    screen.key(["escape", "q", "C-c"], (ch, key) => process.exit(0));

    return screen;
  }

  /**
   * Initiates a box (?)
   */
  private initiateBox() {
    // Create a box perfectly centered horizontally and vertically
    const box = blessed.box({
      top: "center",
      left: "center",
      width: "50%",
      height: "50%",
      content: "{bold}I am running!{/bold}",
      tags: true,
      border: {
        type: "line",
      },
      style: {
        fg: "white",
        bg: "magenta",
        border: {
          fg: "#f0f0f0",
        },
      },
    });

    return box;
  }

  /**
   * Visit HTML page and render page
   * @param url
   * @param isLocal
   */
  async visitURL(url: string, isLocal: boolean) {
    // TODO: use parsed data
    try {
      const data = await getParsedData(url, isLocal)
      console.log(data);
    } catch (err) {
      console.error(err)
    }

    // Focus our element (?)
    this.box.focus();

    // Render the screen
    this.screen.render();
  }
}
