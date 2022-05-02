export const frequencyCounter =  (list1: number[], list2: number[]) => {

  type Frequency = {
    [index: string]: number;
  }

  const calcFrequency = (list: number[]): Frequency => {
    const freqList: { [index: string]: number } = {} as Frequency;
    for (let i = 0; i < list.length; i++) {
       freqList[list[i]] = freqList[list[i]] + 1 || 1
    }
    return freqList;
  }

  const squares: number[] = list1.map((number) => {
    return number**2;
  });

  if (squares.length !== list2.length) {
    return false;
  }

  const squaresFreq: Frequency =  calcFrequency(squares);
  const list2Freq: Frequency = calcFrequency(list2);

  for (const [key, value] of Object.entries(list2Freq)) {
    if (squaresFreq[key] !== value) {
      return false
    }
  }

  return true;
}

export const frequencyCounterImperative =  (list1: number[], list2: number[]) => {
  if (list1.length !== list2.length) {
    return false;
  }
  for (let i = 0; i < list1.length; i++) {
    const correctIndex: number = list2.indexOf(list1[i] **2)
    if(correctIndex === -1) {
      return false;
    }
    list2.splice(correctIndex, 1);
  }
  return true;
}


export default {
  frequencyCounter,
  frequencyCounterImperative
}
