export const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-GB', {
    ...{
      currencyDisplay: 'narrowSymbol',
    },
    minimumSignificantDigits: value > 0 ? 2 : 1,
  }).format(value);
};
