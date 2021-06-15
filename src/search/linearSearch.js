const dataset1 = [10, 15, 20, 25, 30] 


// 1
function linearSearch(dataset, searchNumber) {
    for(let [index, number] of dataset.entries()) {
       if (number === searchNumber) {
           return index;
       }
    }
    return -1;
}

// 2
function linearSearchForEach(dataset, searchNumber) {
    dataset.forEach((number, index) => {
        if (number === searchNumber) {
            return index;
        }
    });
    return -1;
}

// 3
function linearSearchFor(dataset, searchNumber) {
    for(let index = 0; index < dataset.length; index++) {
        if (dataset[index] === searchNumber) {
            return index;
        }
    }
    return -1;
}

// 4
function linearSearchMap(dataset, searchNumber) {
    dataset.map((number, index) => {
       if (number === searchNumber) {
           return index;
       }
    });
    return -1;
}

console.log(linearSearch(dataset1, 25))
console.log(linearSearchForEach(dataset1, 25))
console.log(linearSearchFor(dataset1, 25))
console.log(linearSearchMap(dataset1, 25))