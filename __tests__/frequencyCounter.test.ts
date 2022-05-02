import { frequencyCounter, frequencyCounterImperative } from '../challenges/frequencyCounter'

describe('frequency counter challenge the second array has the corresponding counterpart', () => {

  describe('frequency Counter', () => {
    test('should return true for [1,2,3], [4, 1, 9] ', () => {
      expect(frequencyCounter([1,2,3], [4,1,9])).toBe(true)
    })
    test('should return true for [1,2,3], [1, 9]', () => {
      expect(frequencyCounter([1,2,3], [1,9])).toBe(false)
    })
    test('should return true for [1,2,1], [4,4,1] (must be the same frequency)', () => {
      expect(frequencyCounter([1,2,1], [4,4,9])).toBe(false)
    })
  });

  describe('frequency Counter Imperative', () => {
    test('should return true for [1,2,3], [4, 1, 9] ', () => {
      expect(frequencyCounterImperative([1,2,3], [4,1,9])).toBe(true)
    })
    test('should return true for [1,2,3], [1, 9]', () => {
      expect(frequencyCounterImperative([1,2,3], [1,9])).toBe(false)
    })
    test('should return true for [1,2,1], [4,4,1] (must be the same frequency)', () => {
      expect(frequencyCounterImperative([1,2,1], [4,4,9])).toBe(false)
    })
  });
})
