const CENTS_PER_DOLLAR = 100

const checkAmountToString = (checkAmount: number): string => {
  const cents = integerCents(checkAmount)
  const centsString = getCentsString(cents);
  return `Zero and ${centsString} dollars`;
};

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
