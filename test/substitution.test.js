// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");
describe("substitution()", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const expected = "message";
      const input = substitution(expected);
      expect(input).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const expected = "message";
      const alphabet = "short";
      const input = substitution(expected, alphabet);
      expect(input).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const expected = "message";
      const alphabet = "abcabcabcabcabcabcabcabcab";
      const input = substitution(expected, alphabet);
      expect(input).to.be.false;
    });
  

    it("should encode a message by using the given substitution alphabet", () => {
      const expected = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const input = substitution(expected, alphabet);
      const expects = "ykrrpik";

      expect(input).to.equal(expects);
    });

    it("should work with any kind of key with unique characters", () => {
      const expected = "message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const input = substitution(expected, alphabet);
      const expects = "ysii.rs";

      expect(input).to.equal(expects);
    });

    it("should preserve spaces", () => {
      const expected = "my message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const input = substitution(expected, alphabet);
      const expects = "yp ysii.rs";

      expect(input).to.equal(expects);
    });

    it("should decode a message by using the given substitution alphabet", () => {
      const expected = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const input = substitution(expected, alphabet, false);
      const expects = "message";

      expect(input).to.equal(expects);
    });

    it("should work with any kind of key with unique characters", () => {
      const expected = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const input = substitution(expected, alphabet, false);
      const expects = "message";

      expect(input).to.equal(expects);
    });

    it("should preserve spaces", () => {
      const expected = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const input = substitution(expected, alphabet, false);
      const expects = "my message";

      expect(input).to.equal(expects);
    });
  });

  