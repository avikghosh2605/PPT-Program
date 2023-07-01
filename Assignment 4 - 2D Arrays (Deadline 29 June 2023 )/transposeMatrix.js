function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];
  
    for (let i = 0; i < columns; i++) {
      transposed[i] = [];
  
      for (let j = 0; j < rows; j++) {
        transposed[i][j] = matrix[j][i];
      }
    }
  
    return transposed;
  }
  
  const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  
  const transposedMatrix = transposeMatrix(matrix);
  console.log(transposedMatrix);  