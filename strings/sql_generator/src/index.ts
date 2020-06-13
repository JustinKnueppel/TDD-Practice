const select = (table: string, columns: Array<string>): string => {
  return table + columns.join(" ")
}

export {
  select
}