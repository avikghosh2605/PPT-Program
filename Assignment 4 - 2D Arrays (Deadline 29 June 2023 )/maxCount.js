function maxCount(m, n, ops) {
    let minX = m;
    let minY = n;
  
    for (const [opX, opY] of ops) {
      minX = Math.min(minX, opX);
      minY = Math.min(minY, opY);
    }
  
    return minX * minY;
  }
  
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = maxCount(m, n, ops);
  console.log(maxIntegers);  