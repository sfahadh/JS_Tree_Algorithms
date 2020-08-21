// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST find max node problem below. There is only 1 input, which is the root of the BST and the goal is to traverse down the tree and find the node with the highest value. Once found, return the node data. If there is no BST, return null;

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const findMax = root => {
    if (!root) return null;
    if (root.right) return findMax(root.right);
    return root.data;
}

module.exports = findMax;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-12.png
* Sample Output: 999
*/