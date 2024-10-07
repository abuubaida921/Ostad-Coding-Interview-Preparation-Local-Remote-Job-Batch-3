function permuteString(str) {
    let result = [];

    // Function for backtracking
    function backtrack(path, used) {
        if (path.length === str.length) {
            result.push(path);
            return;
        }
        
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue;
                
            used[i] = true;
            backtrack(path + str[i], used);
        
            used[i] = false;
        }
    }
    
    // Call the backtracking helper
    backtrack("", Array(str.length).fill(false));
    return result;
}

/// Example usage:
console.log(permuteString("abc"));
console.log(permuteString("xy"));



/// Time Complexity: O(n * n!)
/// Also Space Complexity: O(n * n!)