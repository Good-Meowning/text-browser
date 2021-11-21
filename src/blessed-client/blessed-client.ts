import blessed from "blessed";
import { getParsedData, ParsedData } from "backend-class";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private box: blessed.Widgets.BoxElement;

  /**
   * Create core elements
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
  }

  /**
   * Update the box content and render it on the UI
   * @param content
   */
  private updateContent(parsedData: ParsedData) {
    this.box.setContent(parsedData.data);

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
      // Use parsed data
      const data = await getParsedData(url);
      this.updateContent(data);
    } catch (err) {
      // TODO: catch different error code and update the error msg
      console.error(err);
      // print a general err msg for now
      const data = {
        data: "An unexpected error occured",
        rawdata: "",
        metadata: {}
      };
      this.updateContent(data);
    }
  }
}
