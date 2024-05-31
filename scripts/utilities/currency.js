export function currencyRound(price) {
  return (Math.round(price) / 100).toFixed(2);
}
