const convert = (infix: string): string => {
  const operator = getOperator(infix);
  const [firstTerm, secondTerm] = getTerms(infix, operator);
  return `${firstTerm} ${secondTerm} ${operator}`;
};

const getTerms = (infix: string, operator: string): Array<string> => {
  return infix.split(operator).map((term) => term.trim());
};

const getOperator = (infix: string): string => {
  const elements = infix.split(" ")
  return elements[1]
}

export default convert;
