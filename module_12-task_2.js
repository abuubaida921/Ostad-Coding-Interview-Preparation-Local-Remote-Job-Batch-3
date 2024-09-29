function maxDisjointIntervals(A) {
    A.sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastEnd = -1;

    for (let [start, end] of A) {
        if (start > lastEnd) {
            count++;
            lastEnd = end;
        }
    }

    return count;
}

/// Example usage:
const A = [[1, 4], [2, 3], [4, 6], [8, 9]];
console.log(maxDisjointIntervals(A)); /// Output: 3


/// Time Complexity: O(n log n)
/// Also Space Complexity: O(n)
