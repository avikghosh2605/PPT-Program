function findMaxLength(nums) {
    const map = new Map();
    map.set(0, -1); // Initialize the map with the sum 0 and index -1
    let maxLength = 0;
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Increment count if nums[i] is 1, decrement count if nums[i] is 0
      count += nums[i] === 1 ? 1 : -1;
  
      // If the count is already present in the map, update the maximum length
      if (map.has(count)) {
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
        // Otherwise, store the current count and its index in the map
        map.set(count, i);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);  