export const createSpiral = (n: number) => {
  let a = 0;
  let b = n - 1;
  let value = 1;
  const matrix: number[][] = [];
  for(let i = 0; i <= b; i++) {
    matrix.push([])
  }
  for (let j = 0; j < matrix.length; j++) {
    for (let i = a; i <= b; i++) {
      matrix[a][i] = value++;
    }

    for (let i = a + 1; i <= b; i++) {
      matrix[i][b] = value++;
    }

    for (let i = b - 1; i >= a; i--) {
      matrix[b][i] = value++;
    }

    for (let i = b - 1; i >= a + 1; i--) {
      matrix[i][a] = value++;
    }
    a++;
    b--;
  }
  return matrix;
}
