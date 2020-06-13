import { expect } from "chai";
import sql, { SqlCondition } from "../src/index";

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

describe("Delete", () => {
  it("Contains table name", () => {
    const table = "customers";
    const conditions: Array<SqlCondition> = [
      {
        column: "id",
        operator: "=",
        value: "*",
      },
    ];
    expect(sql.delete(table, conditions)).to.include(table);
  });

  it("Contains column names", () => {
    const table = "customers";
    const conditions: Array<SqlCondition> = [
      {
        column: "id",
        operator: "=",
        value: "*",
      },
      {
        column: "name",
        operator: "=",
        value: "Doe",
      },
    ];
    const sqlExpression = sql.delete(table, conditions);
    const columnsThatDontAppear = conditions.filter(
      (condition) =>
        !(
          sqlExpression.includes(condition.column) &&
          sqlExpression.includes(condition.value.toString())
        )
    );
    expect(columnsThatDontAppear.length).to.equal(0);
  });

  it("Deletes based on single condition", () => {
    const table = "customers";
    const conditions: Array<SqlCondition> = [
      {
        column: "id",
        operator: "=",
        value: "*",
      },
    ];
    const sqlExpression = "DELETE FROM customers WHERE id = *";
    expect(sql.delete(table, conditions)).to.equal(sqlExpression);
  });

  it("Deletes based on multiple conditions", () => {
    const table = "customers";
    const conditions: Array<SqlCondition> = [
      {
        column: "id",
        operator: "=",
        value: "*",
      },
      {
        column: "balance",
        operator: ">=",
        value: 1000
      }
    ];
    const sqlExpression = "DELETE FROM customers WHERE id = * AND balance >= 1000";
    expect(sql.delete(table, conditions)).to.equal(sqlExpression);
  });
});
