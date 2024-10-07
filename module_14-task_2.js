function countComponents(A, B) {
    // Build the graph as an adjacency list
    const graph = new Map();
    for (let i = 1; i <= A; i++) {
        graph.set(i, []);
    }
    for (const [u, v] of B) {
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    // Helper function for DFS
    function dfs(node, visited) {
        visited[node] = true;
        for (const neighbor of graph.get(node)) {
            if (!visited[neighbor]) {
                dfs(neighbor, visited);
            }
        }
    }

    // Count the number of connected components
    const visited = new Array(A + 1).fill(false);
    let count = 0;

    for (let i = 1; i <= A; i++) {
        if (!visited[i]) {
            count++;
            dfs(i, visited);
        }
    }

    return count;
}

/// Example usage:
console.log(countComponents(4, [[1, 2], [2, 3]]));
console.log(countComponents(3, [[1, 2], [2, 1]]));
