const { makeLowerCase, capitaliseFirstLetter } = require("../aux-funcs");

describe("Auxiliary functions", () => {
  describe("makeLowercase()", () => {
    it("returns string with all letters converted to lower case", () => {
      expect(makeLowerCase("Topic")).toBe("topic");
      expect(makeLowerCase("This Topic Has Spaces")).toBe("this topic has spaces");
    });
  });
  describe("capitaliseFirstLetter()", () => {
    it("capitalises first letter of given string", () => {
      expect(capitaliseFirstLetter("topic")).toBe("Topic");
      expect(capitaliseFirstLetter("topic-topic")).toBe("Topic-topic");
    });
  });
});
