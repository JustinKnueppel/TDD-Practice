import { expect } from "chai";
import * as sql from "../src/index";

describe("Select", () => {
  it("Contains table name", () => {
    const table = "customers";
    const columns = ["id", "name"];
    expect(sql.select(table, columns)).to.include(table);
  });

  it("Contains column names", () => {
    const table = "customers";
    const columns = ["id", "name"];
    const sqlExpression = sql.select(table, columns);
    const columnsThatDontAppear = columns.filter(
      (column) => !sqlExpression.includes(column)
    );
    expect(columnsThatDontAppear.length).to.equal(0);
  });

  it("Selects single column", () => {
    const table = "customers";
    const columns = ["id"];
    const sqlExpression = "SELECT id FROM customers";
    expect(sql.select(table, columns)).to.equal(sqlExpression);
  });

  it("Selects multiple columns", () => {
    const table = "stores";
    const columns = ["id", "name"];
    const sqlExpression = "SELECT id, name FROM stores";
    expect(sql.select(table, columns)).to.equal(sqlExpression);
  });
});
