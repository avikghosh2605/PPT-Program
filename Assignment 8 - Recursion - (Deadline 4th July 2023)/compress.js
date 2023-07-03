function compress(chars) {
    let anchor = 0;
    let write = 0;
  
    for (let read = 0; read < chars.length; read++) {
      if (read + 1 === chars.length || chars[read + 1] !== chars[read]) {
        chars[write] = chars[anchor];
        write++;
  
        if (read > anchor) {
          const count = (read - anchor + 1).toString();
          for (let i = 0; i < count.length; i++) {
            chars[write] = count[i];
            write++;
          }
        }
  
        anchor = read + 1;
      }
    }
  
    return write;
  }
  
  // Example usage
  const chars = ["a","a","b","b","c","c","c"];
  const compressedLength = compress(chars);
  const compressedChars = chars.slice(0, compressedLength);
  console.log(compressedLength); // Output: 6
  console.log(compressedChars); // Output: ["a", "2", "b", "2", "c", "3"]  