function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1; // Minimum is in the right half
        } else {
            right = mid; // Minimum is in the left half or at mid
        }
    }

    return nums[left]; // When left == right, we have found the minimum
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2]));  // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));  // Output: 0
console.log(findMin([11, 13, 15, 17]));  // Output: 11


/// Time Complexity: O(log n)