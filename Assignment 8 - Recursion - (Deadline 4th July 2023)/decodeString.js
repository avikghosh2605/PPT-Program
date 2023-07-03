function decodeString(s) {
    const stack = [];
    const countStack = [];
    let currentStr = "";
    let count = 0;
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (/[0-9]/.test(char)) {
        count = count * 10 + parseInt(char);
      } else if (char === "[") {
        stack.push(currentStr);
        countStack.push(count);
        currentStr = "";
        count = 0;
      } else if (char === "]") {
        const repeatCount = countStack.pop();
        const decodedStr = stack.pop() + currentStr.repeat(repeatCount);
        currentStr = decodedStr;
      } else {
        currentStr += char;
      }
    }
  
    return currentStr;
  }
  
  // Example usage
  const s = "3[a]2[bc]";
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: "aaabcbc"  