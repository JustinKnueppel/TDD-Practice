const CENTS_PER_DOLLAR = 100

const checkAmountToString = (checkAmount: number): string => {
  const dollars = dollarsFromCheckAmount(checkAmount)
  const dollarString = parseOnesDigit(dollars)
  const formattedDollarString = capitalizeFirstLetter(dollarString)
  const cents = integerCents(checkAmount)
  const centsString = getCentsString(cents);
  return `${formattedDollarString} and ${centsString} dollars`;
};

const dollarsFromCheckAmount = (checkAmount: number): number => {
  return Math.floor(checkAmount)
}

const capitalizeFirstLetter = (str: string): string => {
  const firstLetter = str[0]
  const restOfString = str.substring(1, str.length)
  return firstLetter.toUpperCase() + restOfString
}

const parseOnesDigit = (dollars: number): string => {
  if (dollars === 0) {
    return "zero"
  }
  const onesStrings = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ]

  const onesDigit = dollars % 10
  return onesStrings[onesDigit]
}

const integerCents = (checkAmount: number): number => {
  return (checkAmount * CENTS_PER_DOLLAR) % CENTS_PER_DOLLAR
}

const getCentsString = (cents: number): string => {
  const twoDigitCents = getTwoDigitCents(cents);
  return `${twoDigitCents}/${CENTS_PER_DOLLAR}`
}

const getTwoDigitCents = (cents: number): string => {
  const prefix = cents < 10 ? "0" : ""
  return prefix + cents
}

export default checkAmountToString;
