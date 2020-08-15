// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST find min node problem below. There is only 1 input, which is the root of the BST and the goal is to traverse down the tree and find the node with the lowest value. Once found, return the node data. If there is no BST, return null;

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const findMin = root => {
    if (!root) return null;
    if (root.left) return findMin(root.left);
    return root.data;

}

module.exports = findMin;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-12.png
* Sample Output: 444
*/