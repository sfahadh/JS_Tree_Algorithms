// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST grab all leaves problem below. There is only 1 input, which is the root of the BST and the goal is to traverse down the tree, identify the leaf nodes, and then return them all in a list. The leaves must be retrieved in order from the left side of the tree to the right side.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const grabAllLeaves = root => {
    const results = [];
    if (!root) return results;
    const queue = [root];

    while (queue.length) {
        const branch = queue.shift();
        if (!branch.left && !branch.right) results.push(branch.data)
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }

    console.log(results.sort((a, b) => a - b));
    return results.sort((a, b) => a - b);
}

module.exports = grabAllLeaves;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-7.png
* Sample Output: [444, 666, 999]
*/