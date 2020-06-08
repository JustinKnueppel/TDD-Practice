import { expect } from "chai";
import checkAmountToString from "../src/index";

describe("Check to string", () => {
  it("First letter is capitalized", () => {
    const amount = 0.0;
    const checkString = checkAmountToString(amount);
    const firstCharacter = checkString[0];
    expect(firstCharacter).to.equal(firstCharacter.toUpperCase());
  });

  it("Amount with no decimal gives 00/100 cents", () => {
    const amount = 0.0;
    const checkString = "Zero and 00/100 dollars";
    expect(checkAmountToString(amount)).to.equal(checkString);
  });

  it("Cents change when decimal changes", () => {
    const amount = 0.01;
    const checkString = "Zero and 01/100 dollars";
    expect(checkAmountToString(amount)).to.equal(checkString);
  });

  it("99 cents gives correct cents", () => {
    const amount = 0.99;
    const checkString = "Zero and 99/100 dollars";
    expect(checkAmountToString(amount)).to.equal(checkString);
  });

  describe("Single digit dollars", () => {
    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("One dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });
  });
});
