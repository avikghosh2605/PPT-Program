function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
  
    // Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
  
      // Find the element just larger than nums[i]
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap nums[i] and nums[j]
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Reverse the sub-array from i+1 to the end
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); // Output: [1, 3, 2]
  