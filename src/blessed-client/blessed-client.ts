import blessed from "blessed";
import { getParsedData } from "backend-class";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private layout: blessed.Widgets.LayoutElement;

  /**
   * Create core elements
   */
  constructor() {
    this.screen = this.initiateScreen();
    this.layout = this.initiateLayout();

    // Append our layout to the screen
    this.screen.append(this.layout);
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
   * Initiates a layout element
   */
  private initiateLayout() {
    const parentScreen = this.screen;

    return blessed.layout({
      parent: parentScreen,
      layout: "inline",
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
  private updateContent(content: string) {
    const layout = this.layout;
    const childBoxArray: blessed.Widgets.BoxElement[] = [];

    // create 10 boxes
    for (let i = 0; i < 10; i++) {
      let childBox = blessed.box({
        parent: layout,
        content: content.substring(5 * i), // random content substring
        clickable: true,
        width: 10, // hardcoded width
        height: 20, // hardcoded height
        border: "line",
        mouse: true
      });

      // this onClick event works
      childBox.on("click", () => console.log(`i am box number ${i}`));
      childBoxArray.push(childBox);
    }

    this.layout.on("wheelup", (_arg) => {
      childBoxArray.forEach((box) => {
        box.top = parseInt(`${box.top}`) + 10;
        box.bottom = parseInt(`${box.bottom}`) + 10;
        // console.log("scroll up"); // this print works
        // this.screen.render() // this dont change anything :(
      });
    });

    this.layout.on("wheeldown", (_arg) => {
      childBoxArray.forEach((box) => {
        box.top = parseInt(`${box.top}`) - 10;
        box.bottom = parseInt(`${box.bottom}`) - 10;
        // console.log("scroll down"); // this print works
        // this.screen.render() // this dont change anything :(
      });
    });

    // Focus our element (?)
    this.layout.focus();

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
