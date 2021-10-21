import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { getParsedData } from "backend-class";
import fsCases from "./cases-fs";
import axiosCases from "./cases-axios";
// Note: baseUrl is set to src/ https://stackoverflow.com/a/43721170

// Note: test async with chai-as-promised https://stackoverflow.com/a/45496509
chai.use(chaiAsPromised);

describe("Data parser test", () => {
  // Local files via fs
  describe("Test local files", () => {
    // Positive cases
    fsCases.forEach(async (output, url) =>
      it(url, () =>
        chai.assert.eventually.equal(getParsedData(url, true), output)
      )
    );

    // Negative cases
    it("path does not exist", async () =>
      chai.assert.isRejected(
        getParsedData("path/does/not/exist", true),
        Error
      ));
  });

  // Remote files via Axios
  describe("Test remote files", () => {
    // Positive cases
    axiosCases.forEach(async (output, url) =>
      it(url, () =>
        chai.assert.eventually.equal(getParsedData(url, false), output)
      )
    );

    // Negative cases
    it("path does not exist", async () =>
      chai.assert.isRejected(
        getParsedData("path/does/not/exist", false),
        Error
      ));
  });
});
