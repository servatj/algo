import { createSpiral } from '../challenges/spiral'

describe("Spiral test", function() {
  it("should return correct arrays", function() {
    expect(createSpiral(1)).toEqual([[1]]);
    expect(createSpiral(2)).toEqual([[1,2], [4, 3]]);
    expect(createSpiral(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]]);
    expect(createSpiral(4)).toEqual([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]);
    expect(createSpiral(5)).toEqual([[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]);
  })
})


// https://www.youtube.com/watch?v=ftrsmc5gUfU

/*
N = 3 Output: [[1,2,3],[8,9,4],[7,6,5]]
1    2    3
8    9    4
7    6    5

N = 4 Output: [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]
1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7

N = 5 Output: [[1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]]
1   2   3   4   5
16  17  18  19  6
15  24  25  20  7
14  23  22  21  8
13  12  11  10  9
*/
