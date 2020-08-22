// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST sum all nodes problem below. There is only 1 input, which is the root of the BST and the goal is to traverse down the tree to add up the values of all nodes and return the total.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const sum = root => {
    let total = 0;
    if (!root) return total;
    const queue = [root];

    while (queue.length) {
        const branch = queue.shift();
        total += branch.data;
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }

    return total;
}

module.exports = sum;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-7.png
* Sample Output: (6 + 4 + 8 + 3 + 5 + 7 + 9) = 42
*/