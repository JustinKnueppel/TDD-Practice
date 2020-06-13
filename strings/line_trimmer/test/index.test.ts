import { expect } from "chai";
import { rightTrim } from "../src/index";

describe("Right trim", () => {
  it("Given empty string return empty string", () => {
    expect(rightTrim("")).to.equal("")
  })
  
  it("Given string with no spaces, return itself", () => {
    const testString = "Hello";
    const trimmed = "Hello";
    expect(rightTrim(testString)).to.equal(trimmed);
  });
});
