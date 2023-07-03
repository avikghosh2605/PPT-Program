function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      // Check if s has any repeated characters
      const charSet = new Set();
      for (let i = 0; i < s.length; i++) {
        if (charSet.has(s[i])) {
          return true;
        }
        charSet.add(s[i]);
      }
      return false;
    }
  
    let firstDiff = -1;
    let secondDiff = -1;
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        if (firstDiff === -1) {
          firstDiff = i;
        } else if (secondDiff === -1) {
          secondDiff = i;
        } else {
          return false; // More than two differences
        }
      }
    }
  
    return (
      secondDiff !== -1 &&
      s[firstDiff] === goal[secondDiff] &&
      s[secondDiff] === goal[firstDiff]
    );
  }
  
  // Example usage
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true  