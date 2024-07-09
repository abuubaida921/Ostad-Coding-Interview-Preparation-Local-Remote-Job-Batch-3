///Main Function

function restoreString(givenString, indices) {
  let shuffledString = new Array(givenString.length);
  for (let i = 0; i < givenString.length; i++) {
    shuffledString[indices[i]] = givenString[i];
  }
  return shuffledString.join("");
}

///Test Cases
console.log(restoreString("mamacode", [4, 5, 6, 7, 0, 1, 2, 3]));
console.log(restoreString("dosta", [4, 0, 1, 2, 3]));
console.log(restoreString("abc", [1, 0, 2]));

/// Time Complexity: O(n)
/// Also Space Complexity: O(n)
