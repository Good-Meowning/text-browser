import { DataServer } from "backend-class";
import blessed from "blessed";
import { helpBox, mainBox, urlBox } from "./box-attributes";

export class BlessedClient {
  private screen: blessed.Widgets.Screen;
  private box: blessed.Widgets.BoxElement;
  private helpBox: blessed.Widgets.BoxElement;
  private input: blessed.Widgets.TextboxElement;
  private dataServer: DataServer;

  /**
   * Create core elements
   */
  constructor() {
    this.screen = this.initiateScreen();
    this.box = this.initiateBox(mainBox);
    this.helpBox = this.initiateBox(helpBox);
    this.input = blessed.textbox(urlBox);
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
  private initiateBox(attributes: blessed.Widgets.BoxOptions) {
    // Create a box perfectly centered horizontally and vertically
    const box = blessed.box(attributes);


    // Setup keypress handlers
    box.key(["enter"], (_ch, _key) => {
      const hrefURL = this.dataServer.getHrefURL();
      if (hrefURL) this.visitURL(hrefURL);
    });
    box.key(["tab"], (_ch, _key) =>
      this.updateContent(this.dataServer.renderPage(1))
    );
    box.key(["S-tab"], (_ch, _key) =>
      this.updateContent(this.dataServer.renderPage(-1))
    );
    box.key(["h"], (_ch, _key) => { 
      this.screen.append(this.helpBox);
      this.screen.render();
    });
    box.key(["S-h"], (_ch, _key) => { 
      this.screen.remove(this.helpBox);
      this.screen.render();
    });

    box.key(["i"], (_ch, _key) => { 
      this.input.key(["escape"], (_ch, _key) => { 
        this.input.cancel()
      });
      this.input.key(["enter"], (_ch, _key) => { 
        this.input.submit()
      });
      this.input.on('submit', async () => {
        await this.visitURL(this.input.value)
        this.screen.remove(this.input)
        this.screen.render();
      })
      this.screen.append(this.input)
      this.input.focus()
      this.screen.render();
    });

    box.key(["S-i"], (_ch, _key) => { 
      this.screen.remove(this.input)
      this.screen.render();
    });
  
    return box;
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
