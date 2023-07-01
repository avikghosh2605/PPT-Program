function singleNumber(nums) {
    let result = 0;
    
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i]; // Bitwise XOR to find the single element
    }
    
    return result;
  }
  
  // Example usage:
  const nums = [2, 2, 1];
  const single = singleNumber(nums);
  console.log(single); // Output: 1
  