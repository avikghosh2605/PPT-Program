function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
    nums2.sort((a, b) => b - a); // Sort nums2 in descending order
  
    let productSum = 0;
  
    for (let i = 0; i < nums1.length; i++) {
      productSum += nums1[i] * nums2[i];
    }
  
    return productSum;
  }
  
  // Example usage:
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  const minProduct = minProductSum(nums1, nums2);
  console.log(minProduct);  