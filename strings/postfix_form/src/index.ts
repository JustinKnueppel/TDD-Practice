const convert = (infix: string): string => {
  const tokens = getTokens(infix)
  if (tokens.length === 0) {
    return ""
  }
  let postfix = ""
  let firstTerm = tokens.shift()!;
  while (tokens.length > 1) {
    const operator = tokens.shift()!
    const secondTerm = tokens.shift()!
    postfix = formatExpression(firstTerm, secondTerm, operator)
    firstTerm = postfix
  }
  return postfix
};

const formatExpression = (term1: string, term2: string, operator: string): string => {
  return `${term1} ${term2} ${operator}`
}

const getTokens = (infix: string): Array<string> => {
  return infix.split(" ")
}

export default convert;
