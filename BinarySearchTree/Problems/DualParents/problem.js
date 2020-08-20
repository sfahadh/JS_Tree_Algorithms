// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST dual parents problem below. There is only 1 input, which is the root of the BST and the goal is to find the number of parents that have 2 childrens. In other words, the parent node should have both a left and right subtree branch or leaf nodes.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const dualParent = root => {
    if (!root) return 0;
    let count = 0;
    const queue = [root];
    while (queue.length) {
        const branch = queue.shift();
        if (branch.left && branch.right) count++;
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }
    console.log(count);
    return count;
}

module.exports = dualParent;

/*
! Test Case:
* Sample Input: Sample Input: refer to Images -> BST-structure-12.png
* Sample Output: 2
*/