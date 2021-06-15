const dataset1 = [0, 1, 3, 5, 10, 15, 20, 25, 30, 50, 60, 110, 150, 200]

const binarySearch = (dataset, number) => {
    let left = 0; 
    let right = dataset.length - 1;
    
    while(left < right) {
       const middle = Math.round(left + (right - left) /2);
       if (number === dataset[middle]) {
         return middle;
       }
       if (dataset[middle] < number) {
         left++;
       }
       if (dataset[middle] > number) {
         right--;
       }
    }
    return -1;
}

console.log(binarySearch(dataset1, 60))

console.log(binarySearch(dataset1, 200))