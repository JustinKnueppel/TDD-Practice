const convert = (infix: string): string => {
  const operator = getOperator(infix);
  const [firstOperand, secondOperand] = getOperands(infix, operator);
  return `${firstOperand} ${secondOperand} ${operator}`;
};

const getOperands = (infix: string, operator: string): Array<string> => {
  return infix.split(operator).map((operand) => operand.trim());
};

const getOperator = (infix: string): string => {
  const elements = infix.split(" ")
  return elements[1]
}

export default convert;
