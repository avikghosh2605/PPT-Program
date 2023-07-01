function findOriginalArray(changed) {
    const n = changed.length;
    if (n % 2 !== 0) {
      return []; // If the length is odd, it cannot be a doubled array
    }
  
    const freqMap = new Map();
    changed.forEach((num) => {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
  
    const original = [];
    for (let [num, freq] of freqMap) {
      if (freq === 0) {
        continue;
      }
  
      const doubleNum = num * 2;
      const doubleFreq = freqMap.get(doubleNum) || 0;
  
      if (doubleFreq === 0 || doubleFreq < freq) {
        return []; // If the double value doesn't exist or has insufficient frequency, return an empty array
      }
  
      for (let i = 0; i < freq; i++) {
        original.push(num);
        freqMap.set(doubleNum, doubleFreq - 1);
      }
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);  