function addStrings(num1, num2) {
    let sum = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      const currentSum = digit1 + digit2 + carry;
      const currentDigit = currentSum % 10;
      carry = Math.floor(currentSum / 10);
  
      sum = currentDigit.toString() + sum;
  
      i--;
      j--;
    }
  
    return sum;
  }
  
  // Example usage:
  const num1 = "11";
  const num2 = "123";
  const sum = addStrings(num1, num2);
  console.log(sum);  // Output: "134"  