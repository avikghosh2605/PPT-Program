function reconstructPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
    let smallest = 0;
    let largest = n;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm[i] = smallest++;
      } else {
        perm[i] = largest--;
      }
    }
  
    perm[n] = smallest; // or largest, as they will be equal at this point
  
    return perm;
  }
  
  // Example usage:
  const s = 'IDID';
  const permutation = reconstructPermutation(s);
  console.log(permutation);
  