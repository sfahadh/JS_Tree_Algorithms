// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BinaryTree = require("../../Starter/BinaryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following balanced tree problem below. There is only 1 input, which is the root
TODO: of the Binary Tree. The goal of this problem is to check if the tree is balanced. A tree is 
TODO: balanced when the difference between the left and right subtrees of every node is less than
TODO: or equal to 1.

function BinaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const balanced = root => {
    let isbalanced = true;

    (function recurse(root) {
        if (!root) return -1;
        const left = recurse(root.left);
        const right = recurse(root.right);

        if (Math.abs(left - right) > 1) isbalanced = false;
        return Math.max(left, right) + 1;
    })(root)

    return isbalanced;
}

module.exports = balanced;

/*
! Test Case:
* Sample Input: refer to Images -> BT-structure-8.png
* Sample Output: true
*/

// ? If the average ends up being a decimal, floor the value;