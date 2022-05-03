export const getMostProfitFromStockQuotes = (quotes: number[]) => {
  let total = 0;
  let sellValue = 0;
  let buy = 0;
  for (let i = 0; i < quotes.length; i++) {
    let currentValue = quotes[i];
    if (currentValue < quotes[i + 1]) {
      buy = currentValue;
      while(currentValue < quotes[i + 1]) {
        sellValue = quotes[i + 1]
        currentValue = sellValue
        i++;
      }
      total = total + (sellValue - buy)
    }
  }
  return total;
}
