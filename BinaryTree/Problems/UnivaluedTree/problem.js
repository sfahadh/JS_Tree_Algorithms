// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BinaryTree = require("../../Starter/BinaryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following univalued tree problem below. There is only 1 input, which is the root
TODO: of the Binary Tree. Univalued means that all the nodes of the Binary Tree has the same value.
TODO: If there are 1 or more nodes different from the others, return false, otherwise if all nodes
TODO: have the same value, return true.

function BinaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const isUnivalued = root => {
    if (!root) return true;
    const data = root.data;

    return (function recurse(root) {
        if (!root) return true;
        if (root.data !== data) return false;
        return recurse(root.left) && recurse(root.right);
    })(root)
};

module.exports = isUnivalued;

/*
! Test Case:
* Sample Input:

* Sample Output:
*/

// ? If the average ends up being a decimal, floor the value;
