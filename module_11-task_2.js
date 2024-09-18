// Define a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to search for a node with a specific value in a BST
function searchBST(root, val) {
    // Base case: if the node is null or the node's value is equal to the target value
    if (root === null || root.val === val) {
        return root;
    }

    // If the target value is less than the current node's value, search the left subtree
    if (val < root.val) {
        return searchBST(root.left, val);
    }

    // If the target value is greater than the current node's value, search the right subtree
    return searchBST(root.right, val);
}

// Example I have used:
let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

let val = 2;
let result = searchBST(root, val);

// Function to convert the tree structure to an array for display
function treeToArray(root) {
    if (root === null) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        let node = queue.shift();
        
        if (node) {
            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
}

console.log(treeToArray(result)); // Output: [2, 1, 3]