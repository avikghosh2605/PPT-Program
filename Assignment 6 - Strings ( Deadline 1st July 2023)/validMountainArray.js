function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Find the peak
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Check if i is a valid peak
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Check the decreasing part of the array
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Example usage:
  const arr = [2, 1];
  const isValidMountain = validMountainArray(arr);
  console.log(isValidMountain);  