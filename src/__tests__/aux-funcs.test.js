const { makeLowerCase } = require("../aux-funcs");

describe("Auxiliary functions", () => {
  describe("makeLowercase()", () => {
    it("returns string with all letters converted to lower case", () => {
      expect(makeLowerCase("Topic")).toBe("topic");
      expect(makeLowerCase("This Topic Has Spaces")).toBe("this topic has spaces");
    });
  });
});
