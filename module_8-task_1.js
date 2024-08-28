function isValid(s) {
    const stack = [];
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in bracketMap) {
            // Check if the stack is empty or the top of the stack does not match the expected opening bracket
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
console.log(isValid("([)]"));     // Output: false
console.log(isValid("{[]}"));     // Output: true


/// Time Complexity: O(n)
/// Also Space Complexity: O(n)