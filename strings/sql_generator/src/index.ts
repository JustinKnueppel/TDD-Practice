const select = (table: string, columns: Array<string>): string => {
  const columnString = columns.join(", ");
  return `SELECT ${columnString} FROM ${table}`;
};

export { select };
