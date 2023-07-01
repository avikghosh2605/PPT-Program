function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const original = [];
    const set = new Set(changed);
  
    for (let i = 0; i < changed.length; i++) {
      const num = changed[i];
  
      if (set.has(num) && set.has(num * 2)) {
        original.push(num);
        set.delete(num);
        set.delete(num * 2);
      }
    }
  
    if (original.length * 2 === changed.length) {
      return original;
    } else {
      return [];
    }
  }
  
  // Example usage
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);  