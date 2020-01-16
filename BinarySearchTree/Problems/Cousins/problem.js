/*
Complete the following BST cousins problem below. There are 3 inputs, the root, and 2 nodes in the BST. The goal is to check if the 2 nodes are cousins and return true if so, otherwise return false. Cousins are identified as having the same grandparents but different parents.  

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/
const cousins = (root, n1, n2) => {
    if (!root || !root.left && !root.right) return false;
    if (sameParent(root, n1, n2)) {
        return false;
    }
    return findHeight(root, n1) === findHeight(root, n2);
}

const findHeight = (root, node) => {
    let sum = 0
    if (!root) {
        return sum;
    } else {
        let foundNode = false;
        const recurse = (root) => {
            if (!root) return 0;
            if (node < root.data) sum += recurse(root.left) + 1;
            if (node > root.data) sum += recurse(root.right) + 1;
            if (root.data === node) foundNode = true;
            return sum;
        }
        const total = recurse(root);
        return foundNode ? total : 0;
    }
}

const sameParent = (root, n1, n2) => {
    if (!root) return false;
    if (root.left && root.right) {
        if (root.left.data === n1 && root.right.data === n2 ||
        root.left.data === n2 && root.right.val === n1) return true;
    }
    if (root.left) sameParent(root.left, n1, n2);
    if (root.right) sameParent(root.right, n1, n2);
}

module.exports = cousins;

/*

	    25                   
	   /  \             	   
     16    26      
    /  \     \           
   5   21     35         

Example 1:
    Input: root = BST, n1 = 21, n2 = 35
    Output: true

Example 2: 
    Input: root = BST, n1 = 5, n2 = 21
    Output: false
*/