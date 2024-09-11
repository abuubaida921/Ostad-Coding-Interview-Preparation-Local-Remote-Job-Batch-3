function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;  // Target found at index mid
        } else if (nums[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }

    return -1;  // Target not found
}

// Example usage:
console.log(search([-1, 0, 3, 5, 9, 12], 9));  // Output: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));  // Output: -1


// Time Complexity: O(log n)