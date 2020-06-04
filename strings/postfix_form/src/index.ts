const convert = (infix: string): string => {
  const tokens = getTokens(infix);
  if (tokens.length === 0) {
    return "";
  }

  return parseBlock(tokens)
};

const parseBlock = (tokens: Array<string>): string => {
  while (hasParentheses(tokens)) {
    const firstParenthesisIndex = getFirstParenthesisIndex(tokens);
    const matchingParenthesisIndex = getMatchingParenthesisIndex(tokens, firstParenthesisIndex);
    const parenthesisExpression = parseBlock(tokens.slice(firstParenthesisIndex + 1, matchingParenthesisIndex))
    const numberOfTokensToReplace = matchingParenthesisIndex - firstParenthesisIndex + 1;
    tokens.splice(firstParenthesisIndex, numberOfTokensToReplace, parenthesisExpression)
  }
  while (atLeastTwoTokensRemaining(tokens)) {
    const substitutionIndex = hasMultiplicationOrDivision(tokens)
      ? firstMultiplicationOrDivisionTermIndex(tokens)
      : 0;
    substituteExpression(tokens, substitutionIndex);
  }
  return tokens[0];
}

const hasParentheses = (tokens: Array<string>): boolean => {
  return getFirstParenthesisIndex(tokens) >= 0
}

const getFirstParenthesisIndex = (tokens: Array<string>): number => {
  return tokens.indexOf('(')
}

const getMatchingParenthesisIndex = (tokens: Array<string>, openParenthesisIndex: number): number => {
  let openParenthesisCount = 0;
  let closedParenthesisCount = 0;
  for (let i = openParenthesisIndex; i < tokens.length; i++) {
    if (tokens[i] === '(')
      openParenthesisCount++;

    if (tokens[i] === ')')
      closedParenthesisCount++;

    if (openParenthesisCount === closedParenthesisCount)
      return i;
  }

  return -1;
}

const hasMultiplicationOrDivision = (tokens: Array<string>): boolean => {
  return hasMultiplication(tokens) || hasDivision(tokens);
};

const hasMultiplication = (tokens: Array<string>): boolean => {
  return getMultiplicationIndex(tokens) >= 0;
};

const hasDivision = (tokens: Array<string>): boolean => {
  return getDivisionIndex(tokens) >= 0;
};

const getDivisionIndex = (tokens: Array<string>): number => {
  return tokens.indexOf("/");
};

const firstMultiplicationOrDivisionTermIndex = (
  tokens: Array<string>
): number => {
  const multiplicationIndex = firstMultiplicationTermIndex(tokens);
  const divisionIndex = firstDivisionTermIndex(tokens);

  if (multiplicationIndex < 0) return divisionIndex;

  if (divisionIndex < 0) return multiplicationIndex;

  return Math.min(multiplicationIndex, divisionIndex);
};

const firstDivisionTermIndex = (tokens: Array<string>): number => {
  return getDivisionIndex(tokens) - 1;
};

const firstMultiplicationTermIndex = (tokens: Array<string>): number => {
  return getMultiplicationIndex(tokens) - 1;
};

const getMultiplicationIndex = (tokens: Array<string>): number => {
  return tokens.indexOf("*");
};

const substituteExpression = (
  tokens: Array<string>,
  startIndex: number
): void => {
  const firstTerm = tokens[startIndex];
  const operator = tokens[startIndex + 1];
  const secondTerm = tokens[startIndex + 2];
  const formattedExpression = formatExpression(firstTerm, secondTerm, operator);
  tokens.splice(startIndex, 3, formattedExpression);
};

const getTokens = (infix: string): Array<string> => {
  const tokens = infix.split(" ");
  splitParenthesisTokens(tokens);
  return tokens;
};

const splitParenthesisTokens = (tokens: Array<string>): void => {
  while (hasTokenWithParenthesisAndNumber(tokens)) {
    const index = indexOfTokenWithParenthesisAndNumber(tokens);
    const numberAndParenthesis = splitParenthesisToken(tokens[index])
    tokens.splice(index, 1, ...numberAndParenthesis)
  }
}

const hasTokenWithParenthesisAndNumber = (tokens: Array<string>): boolean => {
  return indexOfTokenWithParenthesisAndNumber(tokens) >= 0
}

const indexOfTokenWithParenthesisAndNumber = (tokens: Array<string>): number => {
  const regex = /(\(\S)|(\S\))/
  for (let i = 0; i < tokens.length; i++) {
    if (regex.test(tokens[i]))
      return i
  }
  return -1;
}

const splitParenthesisToken = (token: string): Array<string> => {
  if (token.includes('('))
    return ['(', token.substring(1)]
  
  return [token.substring(0, token.length - 1), ')']
}

const atLeastTwoTokensRemaining = (tokens: Array<string>): boolean => {
  return tokens.length >= 2;
};

const formatExpression = (
  term1: string,
  term2: string,
  operator: string
): string => {
  return `${term1} ${term2} ${operator}`;
};

export default convert;
