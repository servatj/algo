export const isAnagram =  (word1: string, word2: string) => {
  type Frequency = {
    [index: string]: number;
  }

  if (word1.length !== word2.length) {
    return false;
  }

  const calcFrequency = (list: string[]): Frequency => {
    const freqList: { [index: string]: number } = {} as Frequency;
    for (let i = 0; i < list.length; i++) {
       freqList[list[i]] = freqList[list[i]] + 1 || 1
    }
    return freqList;
  }

  const wordCounts: Frequency = calcFrequency(word1.split(''));
  const word2Counts: Frequency = calcFrequency(word2.split(''));


  for (const [key, value] of Object.entries(wordCounts)) {
    if (word2Counts[key] !== value) {
      return false
    }
  }

  return true;
}

export default {
  isAnagram,
}
