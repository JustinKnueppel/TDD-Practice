const convert = (infix: string): string => {
  const tokens = getTokens(infix)
  if (tokens.length === 0) {
    return ""
  }
  while (atLeastTwoTokensRemaining(tokens)) {
    const substitutionIndex = hasMultiplicationOrDivision(tokens) ? firstMultiplicationOrDivisionTermIndex(tokens) : 0
    substituteExpression(tokens, substitutionIndex)
  }
  return tokens[0]
};

const hasMultiplicationOrDivision = (tokens: Array<string>): boolean => {
  return hasMultiplication(tokens) || hasDivision(tokens)
}

const hasMultiplication = (tokens: Array<string>): boolean => {
  return getMultiplicationIndex(tokens) >= 0
}

const hasDivision = (tokens: Array<string>): boolean => {
  return getDivisionIndex(tokens) >= 0
}

const getDivisionIndex = (tokens: Array<string>): number => {
  return tokens.indexOf("/")
}

const firstMultiplicationOrDivisionTermIndex = (tokens: Array<string>): number => {
  const multiplicationIndex = firstMultiplicationTermIndex(tokens)
  const divisionIndex = firstDivisionTermIndex(tokens)

  if (multiplicationIndex < 0)
    return divisionIndex

  if (divisionIndex < 0)
    return multiplicationIndex

  return Math.min(multiplicationIndex, divisionIndex)
}

const firstDivisionTermIndex = (tokens: Array<string>): number => {
  return getDivisionIndex(tokens) - 1
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
