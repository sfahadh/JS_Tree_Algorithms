// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BinaryTree = require("../../Starter/BinaryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following symmetric tree problem below. There is only 1 input, which is the root
TODO: of the Binary Tree. The goal of this problem is to check if the left branches equals to the 
TODO: right branches of each node of the tree.

function BinaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const symmetric = root => {
    if (!root) return true;
    return traverse(root.left, root.right)
};

const traverse = (left, right) => {
    if (!left && !right) return true;
    if (left && !right || !left && right || left.data !== right.data) return false;
    return traverse(left.left, right.right) && traverse(left.right, right.left);
}

module.exports = symmetric;

/*
! Test Case:
* Sample Input: refer to Images -> BT-structure-4.png
* Sample Output: true
*/

// ? If the average ends up being a decimal, floor the value;
