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
      smartCSR: true
    });

    // Set screen title
    screen.title = "Good Meowning!";

    // Quit on Escape, q, or Control-C
    screen.key(["escape", "q", "C-c"], (_ch, _key) => process.exit(0));

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
      width: "100%",
      height: "100%",
      tags: true,
      border: {
        type: "line"
      },
      style: {
        fg: "white",
        bg: "magenta",
        border: {
          fg: "#f0f0f0"
        }
      },
      // enable scrolling with mouse
      scrollable: true,
      alwaysScroll: true,
      mouse: true
    });

    return box;
  }

  /**
   * Update the box content and render it on the UI
   * @param content
   */
  private updateContent(content: string) {
    this.box.setContent(content);
    // Focus our element (?)
    this.box.focus();

    // Render the screen
    this.screen.render();
  }

  /**
   * Visit HTML page and render page
   * @param url
   */
  async visitURL(url: string) {
    // Use parsed data
    let data = "";
    try {
      data = await getParsedData(url);
      console.error(data);
    } catch (err) {
      // TODO: catch different error code and update the error msg
      console.error(err);
      // print a general err msg for now
      data = "An unexpected error occured";
    }

    // update the content
    this.updateContent(data);
  }
}
