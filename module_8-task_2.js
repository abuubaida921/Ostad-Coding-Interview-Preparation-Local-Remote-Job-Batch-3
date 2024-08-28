function removeDuplicates(s) {
  const stack = [];

  for (const char of s) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
          stack.pop(); // Remove the last character if it matches the current character
      } else {
          stack.push(char); // Otherwise, add the current character to the stack
      }
  }

  return stack.join('');
}

// Example usage:
console.log(removeDuplicates("abbaca")); // Output: "ca"
console.log(removeDuplicates("aabccba")); // Output: "a"
console.log(removeDuplicates("aaabbbccc")); // Output: "abc"
console.log(removeDuplicates("azxxzy")); // Output: "ay"




/// Time Complexity: O(n)
/// Also Space Complexity: O(n)