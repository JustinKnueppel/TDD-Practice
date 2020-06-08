import { expect } from "chai";
import checkAmountToString from "../src/index";

describe("Check to string", () => {
  it("First letter is capitalized", () => {
    const amount = 0.00;
    const checkString = checkAmountToString(amount);
    const firstCharacter = checkString[0];
    expect(firstCharacter).to.equal(firstCharacter.toUpperCase());
  });

  it("Amount with no decimal gives 00/100 cents", () => {
    const amount = 0.00
    const checkString = "Zero and 00/100 dollars"
    expect(checkAmountToString(amount)).to.equal(checkString)
  })
});
