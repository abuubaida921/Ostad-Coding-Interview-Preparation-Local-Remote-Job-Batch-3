///Main Function

function multiply(a, b) {
  /// Base case: if b is 0, the result is 0
  if (b === 0) {
      return 0;
  }
  /// Recursively add a to the result of multiplying a with (b-1)
  return a + multiply(a, b - 1);
}

///Test Cases
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(3, 3)); // Output: 9
console.log(multiply(0, 2)); // Output: 0


/// Time Complexity: O(b) 
/// Also Space Complexity: O(b)
