function validPath(n, edges, source, destination) {
    if (source === destination) return true;
    
    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }
    
    const visited = new Array(n).fill(false);
    const queue = [source];
    visited[source] = true;

    while (queue.length > 0) {
        const node = queue.shift();
        
        if (node === destination) return true;

        for (const neighbor of graph.get(node) || []) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    
    return false;
}

/// Example usage:
console.log(validPath(3, [[0, 1], [1, 2], [2, 0]], 0, 2));
console.log(validPath(6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5));