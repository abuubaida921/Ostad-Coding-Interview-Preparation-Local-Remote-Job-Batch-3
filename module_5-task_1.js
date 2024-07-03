///Main Function

function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const numberToFind = target - nums[i];
    if (numMap.has(numberToFind)) {
      return [numMap.get(numberToFind), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
}

///Test Cases
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([1, 5, 6, 3, 2, 8, 9, 9, 3, 3], 18));


/// Time Complexity: O(n)
/// Also Space Complexity: O(n)
