///Main Function

function isPalindrome(s) {
  ///Recursion Function
  function checkPalindrome(start, end) {
      /// Base case: if pointers have crossed, it's a palindrome
      if (start >= end) {
          return true;
      }
      /// Check characters at the current pointers
      if (s[start] !== s[end]) {
          return false;
      }
      /// Move pointers inward and recurse
      return checkPalindrome(start + 1, end - 1);
  }
  /// Initial call to the recursion function with the full string
  return checkPalindrome(0, s.length - 1);
}

///Test Cases
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("adam"));  // Output: false
console.log(isPalindrome("tenet")); // Output: true


/// Time Complexity: O(n) ;  n is length of string
/// Also Space Complexity: O(n)