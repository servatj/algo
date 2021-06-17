const arr = [23, 34, 12, 14, 9, 10, 52];

const selection = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lower = arr[i];
    let index = i;
    for (let j = i; j < arr.length; j++) {
      if(lower > arr[j + 1]) {
        lower = arr[j + 1];
        index = j + 1;
      }
    }
    arr[index] = arr[i];
    arr[i] = lower;
  }
  return arr;
};

console.log(selection(arr))