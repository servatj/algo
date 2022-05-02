import Calc from './Calc';

describe('Calc', () => {
  test('should return 10 for ', () => {
    const calc = new Calc();
    expect(calc.add(6, 4)).toBe(10)
  })

  test('shoud return 9 for add(10, -1)', () => {
    const calc = new Calc();
    expect(calc.add(10, -1)).toBe(9)
  })
})
