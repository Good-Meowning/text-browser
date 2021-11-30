import { DataServer } from "backend-class";
import blessed from "blessed";
import { helpBox, mainBox, screen, inputBox } from "./box-attributes";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private mainBox: blessed.Widgets.BoxElement;
  private helpBox: blessed.Widgets.BoxElement;
  private inputBox: blessed.Widgets.TextboxElement;
  private dataServer: DataServer;

  /**
   * Create core elements
   */
  constructor() {
    // Instantiate Blessed attributes
    this.screen = blessed.screen(screen);
    this.mainBox = blessed.box(mainBox);
    this.helpBox = blessed.box(helpBox);
    this.inputBox = blessed.textbox(inputBox);

    // Set up keypress listeners
    this.initiateScreen();
    this.initiateMainBox();
    this.initiateHelpBox();
    this.initiateInputBox();

    // Instantiate new data server
    this.dataServer = new DataServer();

    // Append our box to the screen
    this.screen.append(this.mainBox);
    this.screen.append(this.inputBox);
  }

  /**
   * Initiates the screen
   */
  private initiateScreen() {
    // Set screen title
    this.screen.title = "Good Meowning!";

    // Quit on Control-C or q
    this.screen.key(["q", "C-c"], (_ch, _key) => process.exit(0));
  }

  /**
   * Set up keypress listeners for the main display box
   */
  private initiateMainBox() {
    this.mainBox.key(["enter"], (_ch, _key) => {
      const hrefURL = this.dataServer.getHrefURL();
      if (hrefURL) this.visitURL(hrefURL);
    });
    this.mainBox.key(["tab"], (_ch, _key) =>
      this.updateContent(this.dataServer.renderPage(1))
    );
    this.mainBox.key(["S-tab"], (_ch, _key) =>
      this.updateContent(this.dataServer.renderPage(-1))
    );
    this.mainBox.key(["h", "?"], (_ch, _key) => {
      this.screen.append(this.helpBox);
      this.helpBox.focus();
      this.screen.render();
    });
    this.mainBox.key(["i"], (_ch, _key) => {
      this.inputBox.setLabel("Type URL here:");
      this.inputBox.focus();
      this.screen.render();
    });
  }

  /**
   * Set up keypress listeners for the help popup box
   */
  private initiateHelpBox() {
    // Setup key shortcuts legend
    this.helpBox.key(["escape", "S-h"], (_ch, _key) => {
      this.screen.remove(this.helpBox);
      this.screen.render();
      this.mainBox.focus();
    });
  }

  /**
   * Set up keypress listeners for the URL input box
   */
  private initiateInputBox() {
    // Set label
    const label = "Press [h] for help menu";
    this.inputBox.setLabel(label);

    this.inputBox.key(["escape"], (_ch, _key) => {
      this.inputBox.setLabel(label);
      this.inputBox.cancel();
      this.mainBox.focus();
      this.screen.render();
    });
    this.inputBox.key(["enter"], (_ch, _key) => this.inputBox.submit());
    this.inputBox.on("submit", () => {
      // Force input label to reset
      this.inputBox.setLabel(label);
      this.screen.render();

      if (this.inputBox.value) {
        this.visitURL(this.inputBox.value);
        this.inputBox.clearValue();
      }
    });
  }

  /**
   * Update the box content and render it on the UI
   * @param content
   */
  private updateContent([parsedData, url]: string[]) {
    this.mainBox.setLabel(url);
    this.mainBox.setContent(parsedData);

    // Focus our element
    this.mainBox.focus();

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
      this.updateContent([data, url]);
    }
  }
}
