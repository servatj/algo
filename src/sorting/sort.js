const sort = (arr) => {
  return arr.sort((a,b) => a - b)
}

console.log(sort([ 123, 12, 13, 20, 3, 11]))

const sortBylen = (arr) => {
  return arr.sort((a,b) => a.length - b.length)
}

console.log(sortBylen([ 'josep', 'andorra', 'mars', 'jupiter', 'moon', 'space']))