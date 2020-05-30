const convert = (infix: string): string => {
  const tokens = getTokens(infix)
  const numbers = getNumbers(tokens);
  const operators = getOperators(tokens);
  return numbers.join(" ") + " " + operators.join(" ")
};

const getTokens = (infix: string): Array<string> => {
  return infix.split(" ")
}

const getNumbers = (tokens: Array<string>): Array<string> => {
  return tokens.filter(token => isNumber(token))
} 

const getOperators = (tokens: Array<string>): Array<string> => {
  return tokens.filter(token => isOperator(token))
} 

const isNumber = (token: string): boolean => {
  return !isNaN(Number(token))
}

const isOperator = (token: string): boolean => {
  const operators = ["+", "-", "*", "/"]
  return operators.includes(token)
}

export default convert;
