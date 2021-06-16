
const bubbleSort = (arr) => {

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            // console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
              const temp = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = temp
            }
        }
    }
    return arr;
}

const result = bubbleSort([37,45,29,8])

// console.log(result)


const bubbleSortGood = (arr) => {

    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
              const temp = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = temp
            }
        }
    }
    return arr;
}


// const result2 = bubbleSortGood([37,45,29,8])

// console.log(result2)

const bubbleSortGoodNoSwap = (arr) => {

    for(let i = arr.length; i > 0; i--) {
        let swap = true
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
              const temp = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = temp
              swap = false
            }
        }
        if(swap) break;
    }
    return arr;
}




const result3 = bubbleSortGoodNoSwap([37,45,29,8,1,2,3,4])

console.log(result3)