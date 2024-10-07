function isPathExist(matrix, N) {
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = Array.from({ length: N }, () => Array(N).fill(false));
    
    function isSafe(x, y) {
        return (x >= 0 && y >= 0 && x < N && y < N && matrix[x][y] === 1 && !visited[x][y]);
    }
    
    function backtrack(x, y) {
        if (x === N - 1 && y === N - 1) return true;
        
        visited[x][y] = true;
        
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            
            if (isSafe(newX, newY)) {
                if (backtrack(newX, newY)) return true;
            }
        }
        
        visited[x][y] = false;
        return false;
    }
    
    if (matrix[0][0] === 0) return false;
    
    return backtrack(0, 0);
}

/// Example usage:
let matrix1 = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];
console.log(isPathExist(matrix1, 4));

let matrix2 = [
    [1, 0],
    [1, 0]
];
console.log(isPathExist(matrix2, 2));

/// Time Complexity: O(n^2)
/// Also Space Complexity: O(n^2)
