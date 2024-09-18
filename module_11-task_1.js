// Define a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Function to calculate the height of a binary tree
function getHeight(root) {
    // Base case: if the tree is empty, so its height is 0
    if (root === null) {
        return 0;
    }

    // Recursively calculate the height of the left and right subtrees
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);

    // The height of the current node is the max of the two subtree heights + 1 (for the current node)
    return Math.max(leftHeight, rightHeight) + 1;
}

// Example I have used:
let root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(getHeight(root)); // Output: 3


/// Time Complexity: O(n), where n is the number of nodes in the binary tree.
/// Also Space Complexity: O(h), where h is the height of the tree due to the recursive stack.