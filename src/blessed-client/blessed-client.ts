import { DataServer } from "backend-class";
import blessed from "blessed";
import { helpBox, mainBox, screen, inputBox } from "./box-attributes";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private mainBox: blessed.Widgets.BoxElement;
  private helpBox: blessed.Widgets.BoxElement;
  private inputBox: blessed.Widgets.TextboxElement;
  private dataServers: DataServer[] = [];
  private activeDS = -1;

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

    // Append our box to the screen
    this.screen.append(this.mainBox);
    this.screen.append(this.inputBox);

    // Instantiate tab
    this.createTab();
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
    // Traverse anchor href URLs
    this.mainBox.key(["enter"], (_ch, _key) => {
      const hrefURL = this.dataServers[this.activeDS].getHrefURL();
      if (hrefURL) this.visitURL(hrefURL);
    });
    this.mainBox.key(["tab"], (_ch, _key) =>
      this.updateContent(this.dataServers[this.activeDS].renderPage(1))
    );
    this.mainBox.key(["S-tab"], (_ch, _key) =>
      this.updateContent(this.dataServers[this.activeDS].renderPage(-1))
    );

    // Traverse tabs
    this.mainBox.key(["n", "right"], (_ch, _key) => this.changeTab(1));
    this.mainBox.key(["S-n", "left"], (_ch, _key) => this.changeTab(-1));
    this.mainBox.key(["C-n", "C-t"], (_ch, _key) => this.createTab());
    this.mainBox.key(["x", "C-w"], (_ch, _key) => this.removeTab());

    // Focus other windows
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

      // Filter out empty input boxs
      if (!this.inputBox.value || !this.inputBox.value.trim()) return;

      // Set URL as default
      let url = this.inputBox.value.trim();

      // Parse anchor href URL indicies
      if (Number.isInteger(url)) {
        const index = parseInt(url);
        url = this.dataServers[this.activeDS].getHrefURL(index);
      } else if (
        url.startsWith("[") &&
        url.endsWith("]") &&
        Number.isInteger(url.substring(1, url.length - 1))
      ) {
        const index = parseInt(url.substring(1, url.length - 1));
        url = this.dataServers[this.activeDS].getHrefURL(index);
      }

      // Visit URL and clear input value
      this.visitURL(url);
      this.inputBox.clearValue();
    });
  }

  /**
   * Change tab and updates main box content
   * @param direction
   */
  private changeTab(direction: number) {
    const lengthDSs = this.dataServers.length;
    const newActiveDS = this.activeDS + direction;
    if (lengthDSs <= 0 || direction === 0) return;

    // Cool mod trick https://stackoverflow.com/a/54427125
    this.activeDS = ((newActiveDS % lengthDSs) + lengthDSs) % lengthDSs;
    this.updateContent(this.dataServers[this.activeDS].renderPage());
  }

  private createTab() {
    this.dataServers.push(new DataServer());
    this.activeDS = this.dataServers.length - 1;
    this.updateContent(this.dataServers[this.activeDS].renderPage());
  }

  private removeTab() {
    this.dataServers.splice(this.activeDS, 1);
    if (this.dataServers.length <= 0) this.createTab();
    else this.changeTab(-1);
  }

  /**
   * Update the box content and render it on the UI
   * @param content
   */
  private updateContent([parsedData, url]: string[]) {
    // default new page
    if (parsedData === "" && url === "") {
      url = "New page";
      parsedData = "Press [h] to view the help menu!";
    }

    // Set URL label and HTML content
    this.mainBox.setLabel(
      `Tab ${this.activeDS + 1}/${this.dataServers.length} - ${url}`
    );
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
      await this.dataServers[this.activeDS].visitURL(url);
      // Parse and render data
      const data = this.dataServers[this.activeDS].renderPage();
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
