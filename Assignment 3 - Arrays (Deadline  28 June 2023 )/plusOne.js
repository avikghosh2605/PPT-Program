function plusOne(digits) {
    const n = digits.length;
    
    // Start from the least significant digit
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0; // Set 9 to 0 and continue to the next digit
      } else {
        digits[i]++; // Increment the digit and return
        return digits;
      }
    }
    
    // If all digits are 9, add a new leading digit 1
    digits.unshift(1);
    return digits;
  }
  
  // Example usage:
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  