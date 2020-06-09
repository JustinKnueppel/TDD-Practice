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

    it("Two dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Three dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Four dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Five dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Six dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Seven dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Eight dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Nine dollar has one for the dollar string", () => {
      const amount = 1.0;
      const checkString = "One and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });
  });

  describe("2 Digit", () => {
    it("Lower bound", () => {
      const amount = 10;
      const checkString = "Ten and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Teen", () => {
      const amount = 15;
      const checkString = "Fifteen and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Over 20 no ones", () => {
      const amount = 30;
      const checkString = "Thirty and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Over 20 with ones", () => {
      const amount = 46;
      const checkString = "Forty six and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Upper bound", () => {
      const amount = 99.99;
      const checkString = "Ninety nine and 99/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });
  });

  describe("3 Digit", () => {
    it("Lower bound", () => {
      const amount = 100;
      const checkString = "One hundred and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("With tens place", () => {
      const amount = 120;
      const checkString = "One hundred twenty and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("With ones and tens place", () => {
      const amount = 111;
      const checkString = "One hundred eleven and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("With decimal", () => {
      const amount = 100.11;
      const checkString = "One hundred and 11/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Upper bound", () => {
      const amount = 999.99;
      const checkString = "Nine hundred ninety nine and 99/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });
  });

  describe("n digits", () => {
    it("4 Digit extended", () => {
      const amount = 1010.22;
      const checkString = "One thousand ten and 22/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("6 Digit extended", () => {
      const amount = 502910.33;
      const checkString =
        "Five hundred two thousand nine hundred ten and 33/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Millions", () => {
      const amount = 1111111.11;
      const checkString =
        "One million one hundred eleven thousand one hundred eleven and 11/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Billions", () => {
      const amount = 2222222222.22;
      const checkString =
        "Two billion two hundred twenty two million two hundred twenty two thousand two hundred twenty two and 22/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });

    it("Large number with one significant digit", () => {
      const amount = 6000000000000;
      const checkString = "Six trillion and 00/100 dollars";
      expect(checkAmountToString(amount)).to.equal(checkString);
    });
  });
});
