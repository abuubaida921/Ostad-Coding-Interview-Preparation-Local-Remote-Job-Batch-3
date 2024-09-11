function merge(nums1, m, nums2, n) {
    let i = m - 1;  // Pointer for the end of the valid elements in nums1
    let j = n - 1;  // Pointer for the end of nums2
    let k = m + n - 1;  // Pointer for the end of nums1

    // Merge in reverse order
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // Copy remaining elements of nums2, if any
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}

// Example usage:
const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(nums1);  // Output: [1, 2, 2, 3, 5, 6]

const nums1_2 = [1];
const nums2_2 = [];
merge(nums1_2, 1, nums2_2, 0);
console.log(nums1_2);  // Output: [1]