import { expect } from "chai";
import convert from "../src/index";

describe("Convert infix to postfix", () => {
  it("Given x + y return x y +", () => {
    const infix = "1 + 2";
    expect(convert(infix)).to.equal("1 2 +");
  });

  it("Given y + x return y x +", () => {
    const infix = "1 + 2";
    expect(convert(infix)).to.equal("1 2 +");
  });

  it("Given x * y return x y *", () => {
    const infix = "1 * 2";
    expect(convert(infix)).to.equal("1 2 *");
  });

  it("Given y * x return y x *", () => {
    const infix = "2 * 1";
    expect(convert(infix)).to.equal("2 1 *");
  });

  it("Given x / y return x y /", () => {
    const infix = "1 / 2";
    expect(convert(infix)).to.equal("1 2 /");
  });

  it("Given x - y return x y -", () => {
    const infix = "1 - 2";
    expect(convert(infix)).to.equal("1 2 -");
  });

  it("Given x + y + z return x y z + +", () => {
    const infix = "1 + 2 + 3";
    expect(convert(infix)).to.equal("1 2 + 3 +");
  });

  it("Given x * y + z return x y * z +", () => {
    const infix = "1 * 2 + 3";
    const postfix = "1 2 * 3 +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Given x + y * z return x y z * +", () => {
    const infix = "1 + 2 * 3";
    const postfix = "1 2 3 * +";
    expect(convert(infix)).to.equal(postfix);
  });

  it("Division operates before addition", () => {
    const infix = "1 + 2 / 3"
    const postfix = "1 2 3 / +"
    expect(convert(infix)).to.equal(postfix)
  })
});
