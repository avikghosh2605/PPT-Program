function findMissingRanges(nums, lower, upper) {
    const result = [];
    
    // Helper function to add range to the result
    const addRange = (start, end) => {
      if (start === end) {
        result.push(start.toString());
      } else {
        result.push(`${start}->${end}`);
      }
    };
    
    // Check if the first number is greater than lower
    if (nums[0] > lower) {
      addRange(lower, nums[0] - 1);
    }
    
    // Check for missing numbers between consecutive elements
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1] + 1) {
        addRange(nums[i - 1] + 1, nums[i] - 1);
      }
    }
    
    // Check if the last number is smaller than upper
    if (nums[nums.length - 1] < upper) {
      addRange(nums[nums.length - 1] + 1, upper);
    }
    
    return result;
  }
  
  // Example usage:
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const ranges = findMissingRanges(nums, lower, upper);
  console.log(ranges); // Output: ["2", "4->49", "51->74", "76->99"]
  