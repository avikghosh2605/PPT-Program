function checkStraightLine(coordinates) {
    if (coordinates.length <= 2) {
      return true;
    }
  
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const slope = (y1 - y0) / (x1 - x0);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      if ((y - y0) / (x - x0) !== slope) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const coordinates = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]];
  const isStraightLine = checkStraightLine(coordinates);
  console.log(isStraightLine);  // Output: true  