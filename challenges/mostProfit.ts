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

export const getMostProfitCodeWars = (quotes: number[]) => {
  let total = 0;
  let spend = 0;
  let countBuys =0;
  let buy = 0;
  let sell = 0;
  for (let i = 0; i < quotes.length; i++) {
    const currentValue = quotes[i];
    for(let j = i + 1; j <= quotes.length; j++) {
      if(currentValue < quotes[j]) {
        buy = currentValue;
        countBuys++;
        spend = spend + buy;
        buy = 0;
        break;
      }
      if(j === quotes.length) {
        sell = currentValue;
        total = total + (sell * countBuys) - spend;
        countBuys = 0;
        sell = 0;
        spend = 0;
        break;
      }
    }
  }
  return total;
}

export function getMostProfitReduce(quotes: number[]) {
  let top=-Infinity;
  return quotes.reduceRight((p,v)=>{
    if(top<v) top=v;
    return p+top-v;
  }, 0);
}
