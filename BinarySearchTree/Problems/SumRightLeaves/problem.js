// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST sum right leaves problem below. There is only 1 input, which is the root of the BST and the goal is to traverse down the tree and identify the leaf nodes that are on the right side branch of the tree or subtrees. Once those right leaf nodes are identified, add all of them up and return the total.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const sumRightLeaves = root => {
    if (!root) return 0;
    let sum = 0;

    (function recurse(root) {
        if (!root) return 0;
        if (root.right) {
            if (!root.right.right) sum += root.right.data;
            recurse(root.right);
        }

        if (root.left) recurse(root.left);
        return sum;
    })(root)

    return sum;
}

module.exports = sumRightLeaves;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-6.png
* Sample Output: (5 + 9) = 14
*/