import { expect } from "chai";
import convert from "../src/index";

describe("Convert infix to postfix", () => {
  it("Given x + y return x y +", () => {
    const infix = "x + y";
    expect(convert(infix)).to.equal("x y +");
  });

  it("Given y + x return y x +", () => {
    const infix = "y + x";
    expect(convert(infix)).to.equal("y x +");
  });
});
