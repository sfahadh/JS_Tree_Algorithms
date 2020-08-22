// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST single parents problem below. There is only 1 input, which is the root of the BST. The goal of this problem is to return the number of nodes that are a single parent.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const singleParent = root => {
    if (!root) return 0;
    if (root.left && !root.right) return singleParent(root.left) + 1;
    if (!root.left && root.right) return singleParent(root.right) + 1;
    return singleParent(root.left) + singleParent(root.right);
}

module.exports = singleParent;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-12.png
* Sample Output: 1
*/