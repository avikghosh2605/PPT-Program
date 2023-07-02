function reverseWords(s) {
    const words = s.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = reverseString(words[i]);
    }
  
    return words.join(" ");
  }
  
  function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  
    return reversed;
  }
  
  // Example usage:
  const s = "Let's take LeetCode contest";
  const reversedSentence = reverseWords(s);
  console.log(reversedSentence);  // Output: "s'teL ekat edoCteeL tsetnoc"  