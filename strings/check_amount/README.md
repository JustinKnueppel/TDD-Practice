# Check amount

Convert an amount on a check to appropriate text. For example:

assertEquals("Two thousand five hundred twenty-three and 04/100 dollars", new CheckAmount(new BigDecimal("2523.04")).toString());