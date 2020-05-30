const convert = (infix: string): string => {
  const tokens = getTokens(infix)
  if (tokens.length === 0) {
    return ""
  }
  let postfix = tokens.shift()!;
  while (atLeastTwoTokensRemaining(tokens)) {
    postfix = addNextTwoTokensToPostfix(postfix, tokens);
  }
  return postfix
};

const getTokens = (infix: string): Array<string> => {
  return infix.split(" ")
}

const atLeastTwoTokensRemaining = (tokens: Array<string>): boolean => {
  return tokens.length >= 2;
}

const addNextTwoTokensToPostfix = (postfix: string, tokens: Array<string>): string => {
  const operator = tokens.shift()!
  const secondTerm = tokens.shift()!
  return formatExpression(postfix, secondTerm, operator)
}

const formatExpression = (term1: string, term2: string, operator: string): string => {
  return `${term1} ${term2} ${operator}`
}

export default convert;
