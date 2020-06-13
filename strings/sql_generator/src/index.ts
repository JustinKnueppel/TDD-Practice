type Operator = "=" | ">" | ">=" | "<" | "<="
export interface SqlCondition {
  column: string;
  operator: Operator;
  value: string|number;
}

const sql = {
  select: (table: string, columns: Array<string>): string => {
    const columnString = columns.join(", ");
    return `SELECT ${columnString} FROM ${table}`;
  },

  delete: (table: string, conditions: Array<SqlCondition>): string => {
    const conditionsString = conditions
      .map(
        (condition) =>
          `${condition.column} ${condition.operator} ${condition.value}`
      )
      .join(" AND ");
    return `DELETE FROM ${table} WHERE ${conditionsString}`;
  },
};

export default sql;
