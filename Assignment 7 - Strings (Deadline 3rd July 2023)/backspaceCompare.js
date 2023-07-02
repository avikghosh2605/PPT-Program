function backspaceCompare(s, t) {
    return buildString(s) === buildString(t);
  }
  
  function buildString(str) {
    const stack = [];
  
    for (let char of str) {
      if (char !== '#') {
        stack.push(char);
      } else {
        stack.pop();
      }
    }
  
    return stack.join("");
  }
  
  // Example usage:
  const s = "ab#c";
  const t = "ad#c";
  const areEqual = backspaceCompare(s, t);
  console.log(areEqual);  // Output: true  