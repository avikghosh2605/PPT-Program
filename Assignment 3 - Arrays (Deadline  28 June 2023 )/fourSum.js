function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    const result = [];
    const n = nums.length;
  
    for (let i = 0; i < n - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue; // Skip duplicates for the first element
      }
  
      for (let j = i + 1; j < n - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue; // Skip duplicates for the second element
        }
  
        let left = j + 1; // Pointer for the third element
        let right = n - 1; // Pointer for the fourth element
  
        while (left < right) {
          const sum = nums[i] + nums[j] + nums[left] + nums[right]; // Calculate the current sum
  
          if (sum === target) {
            // If the sum equals the target, add it to the result array
            result.push([nums[i], nums[j], nums[left], nums[right]]);
  
            // Skip duplicates for the third and fourth elements
            while (left < right && nums[left] === nums[left + 1]) {
              left++;
            }
            while (left < right && nums[right] === nums[right - 1]) {
              right--;
            }
  
            left++;
            right--;
          } else if (sum < target) {
            left++; // Move the left pointer to increase the sum
          } else {
            right--; // Move the right pointer to decrease the sum
          }
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result);
  