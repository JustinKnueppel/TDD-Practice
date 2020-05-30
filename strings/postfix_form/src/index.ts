const convert = (infix: string): string => {
  const [firstOperand, secondOperand] = getOperands(infix);
  return `${firstOperand} ${secondOperand} +`;
};

const getOperands = (infix: string): Array<string> => {
  return infix.split("+").map((operand) => operand.trim());
};

export default convert;
