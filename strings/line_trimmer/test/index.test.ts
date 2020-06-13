import { expect } from "chai";
import { rightTrim } from "../src/index";

describe("Right trim", () => {
  it("Given empty string return empty string", () => {
    expect(rightTrim("")).to.equal("");
  });

  it("Given string with no spaces, return itself", () => {
    const testString = "Hello";
    const trimmed = "Hello";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Given string of spaces, return empty string", () => {
    const testString = "  ";
    const trimmed = "";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Given string of tabs return empty string", () => {
    const testString = "\t\t";
    const trimmed = "";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Given single word with spaces to the right return stripped string", () => {
    const testString = "Hello ";
    const trimmed = "Hello";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Given multiple words with right padding remove only the right padding", () => {
    const testString = "Hello world! ";
    const trimmed = "Hello world!";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Given left padded string, return the full string", () => {
    const testString = " Hello world!";
    const trimmed = " Hello world!";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Removes right padding on each line of string", () => {
    const testString = "  Hello world! \nFoo bar  \t";
    const trimmed = "  Hello world!\nFoo bar";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Preserves blank lines", () => {
    const testString = "  Hello world! \n\n\nFoo bar  \t";
    const trimmed = "  Hello world!\n\n\nFoo bar";
    expect(rightTrim(testString)).to.equal(trimmed);
  });

  it("Respects windows line endings", () => {
    const testString = "  Hello world! \r\n\r\n\r\nFoo bar  \t";
    const trimmed = "  Hello world!\r\n\r\n\r\nFoo bar";
    expect(rightTrim(testString)).to.equal(trimmed);
  });
});
