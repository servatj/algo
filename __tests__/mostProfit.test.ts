import { getMostProfitFromStockQuotes, getMostProfitCodeWars, getMostProfitReduce } from '../challenges/mostProfit'

describe("Most Profit", function() {
  it("should return most profit", function() {
    expect(getMostProfitFromStockQuotes([7,1,5,3,6,4])).toBe(7);
    expect(getMostProfitFromStockQuotes([1,2,3,4,5])).toBe(4);
  })

  it("should get no profit", () => {
    expect(getMostProfitFromStockQuotes([7,6,4,3,1])).toBe(0);
  })
})


describe("Most Profit codewars", function() {
  it("should return most profit", function() {
    expect(getMostProfitCodeWars([1,2,3,4,5,6])).toBe(15);
    expect(getMostProfitCodeWars([6,5,4,3,2,1])).toBe(0);
    expect(getMostProfitCodeWars([1,6,5,10,8,7])).toBe(18);
    expect(getMostProfitCodeWars([1,2,10,3,2,7,3,2])).toBe(26);
  })
})

describe("Most Profit codewars", function() {
  it("should return most profit", function() {
    expect(getMostProfitReduce([1,2,3,4,5,6])).toBe(15);
    expect(getMostProfitReduce([6,5,4,3,2,1])).toBe(0);
    expect(getMostProfitReduce([1,6,5,10,8,7])).toBe(18);
    expect(getMostProfitReduce([1,2,10,3,2,7,3,2])).toBe(26);
  })
})
