function findAnagrams(s, p) {
    const result = [];
    const pFreq = new Map();
  
    // Create a frequency map of characters in p
    for (let char of p) {
      pFreq.set(char, (pFreq.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
    let count = p.length;
  
    while (right < s.length) {
      // Expand the window
      const char = s[right];
      if (pFreq.has(char)) {
        pFreq.set(char, pFreq.get(char) - 1);
        if (pFreq.get(char) >= 0) {
          count--;
        }
      }
      right++;
  
      // Shrink the window if the window size exceeds p's length
      if (right - left > p.length) {
        const char = s[left];
        if (pFreq.has(char)) {
          pFreq.set(char, pFreq.get(char) + 1);
          if (pFreq.get(char) > 0) {
            count++;
          }
        }
        left++;
      }
  
      // Add the start index to the result if all characters of p are found
      if (count === 0) {
        result.push(left);
      }
    }
  
    return result;
  }
  
  // Example usage
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]  