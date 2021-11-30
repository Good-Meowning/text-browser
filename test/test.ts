import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import {
  DataServer,
  getBodyElement,
  getParsedHref,
  getParsedURL,
  parseTree
} from "backend-class";
import casesDataParserURL from "./cases-data-parser/cases-url";
import casesDataParserHREF from "./cases-data-parser/cases-href";
import casesDataParserHTTP from "./cases-data-parser/cases-axios";
import casesDataParserFS from "./cases-data-parser/cases-fs";
import casesDataServerHTTP from "./cases-data-server/cases-axios";
import casesDataServerFS from "./cases-data-server/cases-fs";
// Note: baseUrl is set to src/ https://stackoverflow.com/a/43721170

// Note: test async with chai-as-promised https://stackoverflow.com/a/45496509
chai.use(chaiAsPromised);

describe("Data parser test", () => {
  // Test URL parsers
  describe("Test URL parser", () => {
    // Positive cases
    casesDataParserURL.forEach(([desc, url, href, file]) => {
      it(desc!, () => {
        const parsedURL = getParsedURL(url!);
        chai.assert.equal(parsedURL.url, href);
        chai.assert.equal(parsedURL.filepath, file);
      });
    });

    // Negative cases
    it("Empty URL", () => chai.expect(() => getParsedURL("")).to.throw());
    it("Starts with slash character in URL", () =>
      chai.expect(() => getParsedURL("/")).to.throw());
    it("Starts with colon character in URL", () =>
      chai.expect(() => getParsedURL(":web server")).to.throw());
  });

  // Test anchor href URL parser
  describe("Test href URL parser", () => {
    // Positive cases
    casesDataParserHREF.forEach(([desc, url, href, result]) => {
      it(desc, () => {
        const parsedURL = getParsedURL(url);
        chai.assert.equal(getParsedHref(parsedURL, href), result);
      });
    });

    // Negative cases
    // it("Empty URL", () => {
    //   const parsedURL = getParsedURL("");
    //   chai.assert.equal(getParsedHref(parsedURL, "anything"), "");
    // });
  });

  // Local files via fs
  describe("Test local files", () => {
    // Positive cases
    casesDataParserFS.forEach(([url, filepath, output]) =>
      it(url, async () => {
        const parsedURL = getParsedURL(url);
        chai.expect(parsedURL).to.have.property("filepath");
        chai.assert.equal(parsedURL.filepath, filepath);
        const bodyElement = await getBodyElement(parsedURL);
        const parsedData = parseTree(bodyElement, parsedURL);
        chai.assert.equal(parsedData.parsedData, output);
      })
    );

    // Negative cases
    it("Path does not exist", () => {
      const parsedURL = getParsedURL("file://path/does/not/exist.html");
      chai.assert.isRejected(getBodyElement(parsedURL), Error);
    });
  });

  // Remote files via Axios
  describe("Test remote files", () => {
    // Positive cases
    casesDataParserHTTP.forEach(([url, href, output]) =>
      it(url, async () => {
        const parsedURL = getParsedURL(url);
        chai.assert.equal(parsedURL.url, href);
        const bodyElement = await getBodyElement(parsedURL);
        const parsedData = parseTree(bodyElement, parsedURL);
        chai.assert.equal(parsedData.parsedData, output);
      })
    );

    // Negative cases
    it("URL does not exist", () => {
      const parsedURL = getParsedURL(
        "http://test-webserver/path/does/not/exist.html"
      );
      chai.assert.isRejected(getBodyElement(parsedURL), Error);
    });
    it("Bad URL format", () =>
      chai.expect(() => getParsedURL(":test-webserver/bad/format")).to.throw());
  });
});

describe("Data server test", () => {
  // Local files via fs
  describe("Test local files", () => {
    // Positive cases
    casesDataServerFS.forEach(
      ([url, parsedURL, output, outputForward, outputBackward, href]) => {
        it(url, async () => {
          const dataServer = new DataServer();
          await dataServer.visitURL(url);
          chai.assert.equal(dataServer.renderPage(), output);
          chai.assert.equal(dataServer.renderPage(3), outputForward);
          chai.assert.equal(dataServer.renderPage(-4), outputBackward);
          chai.assert.equal(dataServer.getHrefURL(), href);
          // chai.assert.equal(dataServer.renderPage(), [output, parsedURL]);
        });
      }
    );

    // Negative cases
    it("Path does not exist", () => {
      const dataServer = new DataServer();
      chai.assert.isRejected(
        dataServer.visitURL("file://path/does/not/exist.html"),
        Error
      );
    });
    it("Anchor href URL do not exist", async () => {
      const dataServer = new DataServer();
      await dataServer.visitURL("file://webserver/public-html/empty.html");
      chai.assert.equal(dataServer.getHrefURL(), "");
    });
    it("Anchor href URL index out of bounds", async () => {
      const dataServer = new DataServer();
      await dataServer.visitURL("file://webserver/public-html/anchor.html");
      chai.assert.equal(dataServer.getHrefURL(1000), "");
    });
  });

  // Remote files via Axios
  describe("Test remote files", () => {
    // Positive cases
    casesDataServerHTTP.forEach(
      ([url, parsedURL, output, outputForward, outputBackward, href]) => {
        it(url, async () => {
          const dataServer = new DataServer();
          await dataServer.visitURL(url);
          chai.assert.equal(dataServer.renderPage(), output);
          chai.assert.equal(dataServer.renderPage(6), outputForward);
          chai.assert.equal(dataServer.renderPage(-8), outputBackward);
          chai.assert.equal(dataServer.getHrefURL(), href);
          // chai.assert.equal(dataServer.renderPage(), [output, parsedURL]);
        });
      }
    );

    // Negative cases
    it("URL does not exist", () => {
      const dataServer = new DataServer();
      chai.assert.isRejected(
        dataServer.visitURL("http://test-webserver/path/does/not/exist.html"),
        Error
      );
    });
    it("Anchor href URL do not exist", async () => {
      const dataServer = new DataServer();
      await dataServer.visitURL("http://test-webserver/empty.html");
      chai.assert.equal(dataServer.getHrefURL(), "");
    });
    it("Anchor href URL index out of bounds", async () => {
      const dataServer = new DataServer();
      await dataServer.visitURL("http://test-webserver/anchor.html");
      chai.assert.equal(dataServer.getHrefURL(1000), "");
    });
  });
});
