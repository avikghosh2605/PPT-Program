function arrangeCoins(n) {
    let row = 1;
    let coins = n;
  
    while (coins >= row) {
      coins -= row;
      row++;
    }
  
    return row - 1;
  }
  
  // Example usage
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows);  