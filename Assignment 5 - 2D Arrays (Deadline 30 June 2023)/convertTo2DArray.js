function convertTo2DArray(original, m, n) {
  const originalLength = original.length;

  // Check if it's possible to create an m x n 2D array
  if (originalLength !== m * n) {
    return [];
  }

  const result = [];
  let index = 0;

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(original[index]);
      index++;
    }

    result.push(row);
  }

  return result;
}

// Example usage
const original = [1, 2, 3, 4];
const m = 2;
const n = 2;

const result = convertTo2DArray(original, m, n);
console.log(result);