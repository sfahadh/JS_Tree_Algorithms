// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST cousins problem below. There are 3 inputs, the root, and the 2 nodes that may or many not be located in the BST. If however, the 2 nodes are located within the BST, then the goal is to check whether the 2 nodes are cousins or not. If the 2 nodes are cousins, return true, otherwise return false. Cousins are identified as having the same grandparents but different parents. For this problem, second cousins (same great grandparents but different grandparents) or even greater distant cousins will count.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/
const cousins = (root, n1, n2) => {
    if (!root || !root.left && !root.right) return false;
    return !sameParent(root, n1, n2) && findHeight(root, n1) === findHeight(root, n2);
}

const findHeight = (root, node, height = 0) => {
    if (!root) return 0
    if (root.data === node) return height;
    return findHeight(root.left, node, height + 1) ||
        findHeight(root.right, node, height + 1)
}

const sameParent = (root, n1, n2) => {
    if (!root) return false;
    if (root.left && root.right) {
        if (root.left.data === n1 && root.right.data === n2 ||
            root.left.data === n2 && root.right.data === n1) return true;
    }
    return sameParent(root.left, n1, n2) || sameParent(root.right, n1, n2);
}

module.exports = cousins;

/*
Sample Tree Input:
	    25                   
	   /  \             	   
     16    26      
    /  \     \           
   5   21     35         

! Test Case 1:
Example 1:
    Input: (root, 21, 35)
    Output: true

! Test Case 2:
Example 2: 
    Input: (root, 5, 21)
    Output: false
*/