export const formatCurrency = (
  amount: number,
  local: string = 'en-US',
  currency: string = 'USD'
) => {
  return amount?.toLocaleString(local, {
    style: 'currency',
    currency,
  });
};
