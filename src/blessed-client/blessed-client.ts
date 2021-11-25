import { DataServer } from "backend-class";
import blessed from "blessed";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private box: blessed.Widgets.BoxElement;
  private dataServer: DataServer;

  /**
   * Create core elements
   */
  constructor() {
    this.screen = this.initiateScreen();
    this.box = this.initiateBox();
    this.dataServer = new DataServer();

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
   * Initiates a big box element
   */
  private initiateBox() {
    // Create a box perfectly centered horizontally and vertically
    return blessed.box({
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
        bg: "black",
        border: {
          fg: "#f0f0f0"
        }
      },
      // enable scrolling with mouse
      scrollable: true,
      alwaysScroll: true,
      mouse: true
    });
  }

  /**
   * Update the box content and render it on the UI
   * @param content
   */
  private updateContent(parsedData: string) {
    this.box.setContent(parsedData);

    // Focus our element
    this.box.focus();

    // Render the screen
    this.screen.render();
  }

  /**
   * Visit HTML page and render page
   * @param url
   */
  async visitURL(url: string) {
    try {
      // Set URL and HTML data in data server
      await this.dataServer.visitURL(url);
      // Parse and render data
      const data = this.dataServer.renderPage();
      this.updateContent(data);
    } catch (err) {
      // TODO: catch different error code and update the error msg
      console.error(err);
      // print a general err msg for now
      const data = "An unexpected error occured";
      this.updateContent(data);
    }
  }
}
