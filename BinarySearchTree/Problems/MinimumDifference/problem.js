// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST minimum difference problem below. There is only one input, which is the root of the BST. The goal is to find the lowest output from subtracting any 2 nodes.  

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const minimumDifference = root => {
    if (!root || !root.left && !root.right) return 0;
    const sorted = bfs(root).sort((a, b) => a - b);
    let min = sorted[1] - sorted[0];

    for (let i = 0; i < sorted.length - 1; i++) {
        if (min > sorted[i + 1] - sorted[i]) {
            min = sorted[i + 1] - sorted[i];
        }
    }

    return min;
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

module.exports = minimumDifference;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-2.png

* Sample Output: 4
10 - 6 = 4
15 - 10 = 5
15 - 6 = 9
*/