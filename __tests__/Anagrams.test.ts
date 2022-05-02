import { isAnagram } from '../challenges/anagram'

describe('Anagram', ()=> {
  test('given 2 empty strings should return true', () => {
    expect(isAnagram('', '')).toBe(true)
  });
  test('given aaz and zza should return false', () => {
    expect(isAnagram('aaz', 'zza')).toBe(false)
  });
  test('given anagram and nagaram should return false', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  });
  test('given rat and car should return false', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  });
  test('given awesome and awesom should return false', () => {
    expect(isAnagram('awesome', 'awesom')).toBe(false)
  });
  test('given qwerty and qeywrt should return false', () => {
    expect(isAnagram('qwerty', 'qeywrt')).toBe(true)
  });
  test('given rat and car should return false', () => {
    expect(isAnagram('texttwisttime', 'timetwisttext')).toBe(true)
  });
});
