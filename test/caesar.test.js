// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.", () => {
    const expected = "Dwight Scrute";
    const shift = 0;
    const input = caesar(expected, shift);
    
    expect(input).to.be.false;
  });


    it("should encode a message by shifting the letters", ()=>{
      const expected = "message";
      const shift = 3;
      const input = caesar(expected, shift);
      const expects = "phvvdjh";
      
      expect(input).to.equal(expects)
    });
  it("should leaves spaces and other symbols as is", () => {
    const expected = "a message.";
    const shift = 3;
    const input = caesar(expected, shift);
    const expects = "d phvvdjh.";
    
    expect(input).to.equal(expects);
  });
  
  it("should ignore capital letters", () => {
    const expected = "A Message";
    const shift = 3;
    const input = caesar(expected, shift);
    const expects = "d phvvdjh";
    
    expect(input).to.equal(expects);
  });
  
    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "message";
      const shift = 3;
      const input = caesar(expected, shift);
      const expects = "phvvdjh";
      
      expect(input).to.equal(expects);
    });
  
    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "wbyox jxdxwfkb";
      const shift = -3;
      const input = caesar(expected, shift, false);
      const expects = "zebra magazine";
      
      expect(input).to.equal(expects)
    });
  
  it("should decode a message by shifting the letters in the opposite way", () => {
    const expected = "phvvdjh";
    const shift = 3;
    const input = caesar(expected, shift, false);
    const expects = "message";
    expect(input).to.equal(expects)
  });


it("should leaves spaces and other symbols as is", () => {
  const expected = "d phvvdjh.";
  const shift = 3;
  const input = caesar(expected, shift, false);
  const expects = "a message.";
  
  expect(input).to.equal(expects);
});

it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "cheud pdjdclqh";
      const shift = 3;
      const input = caesar(expected, shift, false);
      const expects = "zebra magazine";

      expect(input).to.equal(expects);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "wbyox jxdxwfkb";
      const shift = -3;
      const input = caesar(expected, shift, false);
      const expects = "zebra magazine";

      expect(input).to.equal(expects);
    });
  });