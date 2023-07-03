class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  function constructTreeFromString(s) {
    if (!s || s.length === 0) {
      return null;
    }
  
    // Find the value of the root node
    let i = 0;
    while (i < s.length && !isNaN(parseInt(s[i]))) {
      i++;
    }
    const rootVal = parseInt(s.substring(0, i));
    const root = new TreeNode(rootVal);
  
    // Check if there are any children
    if (i === s.length) {
      return root;
    }
  
    // Count the number of open and close parentheses
    let count = 0;
    let start = i;
    while (i < s.length) {
      if (s[i] === "(") {
        count++;
      } else if (s[i] === ")") {
        count--;
      }
  
      if (count === 0) {
        if (start === 0) {
          // Left child
          root.left = constructTreeFromString(s.substring(start + 1, i));
        } else {
          // Right child
          root.right = constructTreeFromString(s.substring(start + 1, i));
        }
        start = i + 1;
      }
  
      i++;
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    const result = [];
  
    function traverse(node) {
      if (!node) {
        return;
      }
  
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  
    traverse(root);
  
    return result;
  }
  
  // Example usage
  const s = "4(2(3)(1))(6(5))";
  const tree = constructTreeFromString(s);
  const result = inorderTraversal(tree);
  console.log(result); // Output: [4, 2, 3, 1, 6, 5]  