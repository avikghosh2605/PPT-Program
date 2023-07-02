function isStrobogrammatic(num) {
    const map = {
      '0': '0',
      '1': '1',
      '6': '9',
      '8': '8',
      '9': '6'
    };
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      if (!map.hasOwnProperty(num[left]) || map[num[left]] !== num[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  // Example usage:
  const num = "69";
  const isStrobogrammaticNumber = isStrobogrammatic(num);
  console.log(isStrobogrammaticNumber);  // Output: true  