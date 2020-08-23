// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST two sum problem below. There are 2 inputs, the root of the BST, and the sum in which 2 nodes somewhere within the tree should add up to. Traverse down the tree and find any two nodes that can be added to equal to the input sum. If that can be done, return true, otherwise return false.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const twoSum = (root, sum) => {
    if (!root) return false;
    const arr = bfs(root);
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[i] + arr[j] === sum) return true;
        }
    }
    return false;
};

const bfs = root => {
    const arr = [];
    const queue = [root];
    while (queue.length) {
        const branch = queue.shift();
        arr.push(branch.data);
        if (branch.left) queue.push(branch.left);
        if (branch.right) queue.push(branch.right);
    }
    return arr;
}

module.exports = twoSum;

/*
* Sample Tree Root: refer to Images -> BST-structure-6.png

! Test Case 1:
Input: (root, 10)
Output: true

! Test Case 2:
Input: (root, 38)
Output: false
*/