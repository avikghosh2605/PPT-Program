function generateMatrix(n) {
    // Initialize the matrix
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1; // Start with the number 1
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
    let direction = "right";
  
    while (top <= bottom && left <= right) {
      if (direction === "right") {
        // Fill the top row from left to right
        for (let i = left; i <= right; i++) {
          matrix[top][i] = num++;
        }
        top++;
        direction = "down";
      } else if (direction === "down") {
        // Fill the right column from top to bottom
        for (let i = top; i <= bottom; i++) {
          matrix[i][right] = num++;
        }
        right--;
        direction = "left";
      } else if (direction === "left") {
        // Fill the bottom row from right to left
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
        direction = "up";
      } else if (direction === "up") {
        // Fill the left column from bottom to top
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
        direction = "right";
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);  