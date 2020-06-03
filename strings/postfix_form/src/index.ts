const convert = (infix: string): string => {
  let tokens = getTokens(infix)
  if (tokens.length === 0) {
    return ""
  }
  while (atLeastTwoTokensRemaining(tokens)) {
    if (hasMultiplication(tokens)) {
      substituteExpression(tokens, firstMultiplicationTermIndex(tokens));
    } else {
      substituteExpression(tokens, 0)
    }
  }
  return tokens[0]
};

const hasMultiplication = (tokens: Array<string>): boolean => {
  return getMultiplicationIndex(tokens) >= 0
}

const firstMultiplicationTermIndex = (tokens: Array<string>): number => {
  return getMultiplicationIndex(tokens) - 1;
}

const getMultiplicationIndex = (tokens: Array<string>): number => {
  return tokens.indexOf("*")
}

const substituteExpression = (tokens: Array<string>, startIndex: number): void => {
  const firstTerm = tokens[startIndex]
  const operator = tokens[startIndex + 1]
  const secondTerm = tokens[startIndex + 2]
  const formattedExpression = formatExpression(firstTerm, secondTerm, operator);
  tokens.splice(startIndex, 3, formattedExpression)
}

const getTokens = (infix: string): Array<string> => {
  return infix.split(" ")
}

const atLeastTwoTokensRemaining = (tokens: Array<string>): boolean => {
  return tokens.length >= 2;
}

const formatExpression = (term1: string, term2: string, operator: string): string => {
  return `${term1} ${term2} ${operator}`
}

export default convert;
