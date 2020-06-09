const CENTS_PER_DOLLAR = 100

const checkAmountToString = (checkAmount: number): string => {
  const dollars = dollarsFromCheckAmount(checkAmount)
  const dollarString = getDollarString(dollars)
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

const getDollarString = (dollars: number): string => {
  if (dollars === 0) {
    return "zero"
  }

  const dollarStringParts: Array<string> = []

  const modifiers = [
    "",
    "thousand",
    "million",
    "billion",
    "trillion",
    "quadrillion",
    "quintillion",
    "sextillion",
    "septillion",
    "octillion",
    "nonillion",
    "decillion"
  ]

  let modifierCount = 0;
  while (dollars > 0) {
    const hundreds = dollars % 1000
    const hundredsString = parseHundreds(hundreds)
    const thousandsString = modifierCount > 0 ? `${hundredsString} ${modifiers[modifierCount]}` : hundredsString
    dollarStringParts.splice(0, 0, thousandsString)
    dollars = Math.floor(dollars / 1000)
    modifierCount++;
  }

  return dollarStringParts.join(" ")
}

const parseHundreds = (hundreds: number): string => {
  const numberOfHundreds = Math.floor(hundreds/100)
  const hundredsString = numberOfHundreds > 0 ? `${parseUnder20(numberOfHundreds)} hundred` : ""
  const twoDigitNumber = hundreds % 100
  const twoDigitNumberString = parseTwoDigitNumber(twoDigitNumber)

  const resultParts = []
  if (hundredsString) {
    resultParts.push(hundredsString)
  }

  if (twoDigitNumberString) {
    resultParts.push(twoDigitNumberString)
  }
  return resultParts.join(" ")
}

const parseTwoDigitNumber = (twoDigitNumber: number): string => {
  if (twoDigitNumber < 20) return parseUnder20(twoDigitNumber)

  const tensStrings = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ]

  const resultParts = []

  const tens = tensStrings[Math.floor(twoDigitNumber/10)];
  if (tens) {
    resultParts.push(tens)
  }
  const ones = parseUnder20(Math.floor(twoDigitNumber%10))
  if (ones) {
    resultParts.push(ones)
  }
  return resultParts.join(" ")
}

const parseUnder20 = (dollars: number): string => {
  const numberStrings = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eightteen",
    "nineteen"
  ]

  return numberStrings[dollars]
}

const integerCents = (checkAmount: number): number => {
  return Math.round((checkAmount * CENTS_PER_DOLLAR) % CENTS_PER_DOLLAR)
}

const getCentsString = (cents: number): string => {
  const twoDigitCents = getTwoDigitCents(cents);
  return `${twoDigitCents}/${CENTS_PER_DOLLAR}`
}

const getTwoDigitCents = (cents: number): string => {
  const prefix = cents < 10 ? "0" : ""
  return prefix + cents
}

checkAmountToString(1010.11)

export default checkAmountToString;
