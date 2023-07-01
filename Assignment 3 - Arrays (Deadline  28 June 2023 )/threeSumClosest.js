function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize the closest sum
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1; // Pointer for the element after nums[i]
    let right = n - 1; // Pointer for the last element

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]; // Calculate the current sum

      if (sum === target) {
        // If the sum equals the target, return it immediately
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        // Update the closest sum if the current sum is closer to the target
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Move the left pointer to increase the sum
      } else {
        right--; // Move the right pointer to decrease the sum
      }
    }
  }

  return closestSum;
}

// Example usage:
const nums = [-1, 2, 1, -4];
const target = 1;
const result = threeSumClosest(nums, target);
console.log(result); // Output: 2
