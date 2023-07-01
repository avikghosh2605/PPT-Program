function arrangeCoins(n) {
    let rowCount = 0;
    let coins = n;
  
    while (coins >= rowCount + 1) {
      rowCount++;
      coins -= rowCount;
    }
  
    return rowCount;
  }
  
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows);  