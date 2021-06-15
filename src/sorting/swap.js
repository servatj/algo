function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const numbers = [1,3,4,5]

swap(numbers, 2, 1)
console.log(numbers)
swap(numbers, 2, 1)
console.log(numbers)

const swapEs5 = (arr, idx1, idx2) => {
   return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

swapEs5(numbers, 1, 3)
console.log(numbers)