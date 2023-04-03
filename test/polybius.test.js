// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () =>{
  it("should encode a message by translating each letter to number pairs", () => {
      const expected = "message";
      const input = polybius(expected);
      const expects = "23513434112251";

      expect(input).to.equal(expects);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const expected = "jiggle";
      const input = polybius(expected);
      const expects = "424222221351";

      expect(input).to.equal(expects);
    });

    it("should leave spaces as is", () => {
      const expected = "my message";
      const input = polybius(expected);
      const expects = "2345 23513434112251";

      expect(input).to.equal(expects);
    });
  

  
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const expected = "23513434112251";
      const input = polybius(expected, false);
      const expects = "message";

      expect(input).to.equal(expects);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const expected = "424222221351";
      const input = polybius(expected, false);

      expect(input).to.include("i");
      expect(input).to.include("j");
    });

    it("should leave spaces as is", () => {
      const expected = "2345 23513434112251";
      const input = polybius(expected, false);
      const expects = "my message";

      expect(input).to.equal(expects);
    });

    it("should return false if the length of all numbers is odd", () => {
      const expected = "2345 235134341122514";
      const input = polybius(expected, false);

      expect(input).to.be.false;
    });
  });
