import { getMostProfitFromStockQuotes } from '../challenges/mostProfit'

describe("Most Profit", function() {
  it("should return most profit", function() {
    expect(getMostProfitFromStockQuotes([7,1,5,3,6,4])).toBe(7);
    expect(getMostProfitFromStockQuotes([1,2,3,4,5])).toBe(4);
  })

  it("should get no profit", () => {
    expect(getMostProfitFromStockQuotes([7,6,4,3,1])).toBe(0);
  })
})
