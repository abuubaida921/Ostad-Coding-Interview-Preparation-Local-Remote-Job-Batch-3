///Main Function

function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

///Test Cases
console.log(strStr("sadbutsad", "sad"));
console.log(strStr("codemama", "ostad"));
console.log(strStr("mirupajahan", "jahan"));

/// Time Complexity: O(n*m)
/// Also Space Complexity: O(1)
