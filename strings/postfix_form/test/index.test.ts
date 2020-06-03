import { expect } from "chai";
import convert from "../src/index";

describe("Convert infix to postfix", () => {
  it("Given single addition expression, postfix the operator", () => {
    const infix = "1 + 2";
    const postfix = "1 2 +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given single addition expression, order of terms does not change", () => {
    const infix = "2 + 1";
    const postfix = "2 1 +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Multiplication recognized as operator", () => {
    const infix = "1 * 2";
    const postfix = "1 2 *";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Division recognized as operator", () => {
    const infix = "1 / 2";
    const postfix = "1 2 /";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Subtraction recognized as operator", () => {
    const infix = "1 - 2";
    const postfix = "1 2 -";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given two expressions of same type, postfix operators sequentially", () => {
    const infix = "1 + 2 + 3";
    const postfix = "1 2 + 3 +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given two expressions of different types in order of order of operations, postfix operators sequentially", () => {
    const infix = "1 * 2 + 3";
    const postfix = "1 2 * 3 +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Multiplication operates before addition", () => {
    const infix = "1 + 2 * 3";
    const postfix = "1 2 3 * +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Division operates before addition", () => {
    const infix = "1 + 2 / 3";
    const postfix = "1 2 3 / +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Multiplication operates before subtraction", () => {
    const infix = "1 - 2 * 3";
    const postfix = "1 2 3 * -";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Division operates before subtraction", () => {
    const infix = "1 - 2 / 3";
    const postfix = "1 2 3 / -";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given multiplication then division, operate in order", () => {
    const infix = "1 * 2 / 3";
    const postfix = "1 2 * 3 /";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given division then multiplication, operate in order", () => {
    const infix = "1 / 2 * 3";
    const postfix = "1 2 / 3 *";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given long statement, operate according to order of operations", () => {
    const infix = "1 + 2 * 3 / 4 - 5"
    const postfix = "1 2 3 * 4 / + 5 -"
    expect(convert(infix)).to.equal(postfix);
  })
});
