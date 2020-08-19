// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST average level problem below. There is only one input, the BST. The goal of this problem is to add up the nodes on each level of the BST, starting with the first level and find the average of those node datas. Traverse to all other levels of the BST, adding up the nodes and calculating the averages for each. Capture the average of each levels into an array and return it.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const avgLevel = root => {
    if (!root) return [];
    const nodeVals = [[]];
    const queue = [root, "level"];

    while (queue.length > 1) {
        const branch = queue.shift();
        if (branch !== "level") nodeVals[nodeVals.length - 1].push(branch.data);
        if (branch.left && branch !== "level") queue.push(branch.left);
        if (branch.right && branch !== "level") queue.push(branch.right);

        if (!queue.includes("level")) {
            queue.push("level");
            nodeVals.push([]);
        }
    }

    const avg = [];
    for (let index of nodeVals) {
        avg.push(Math.floor(index.reduce((acc, curr) => acc + curr) / index.length)));
    }

    console.log(avg);
    return avg;
}

module.exports = avgLevel;

/*
! Test Case:
* Sample Input:
	    25           Level 1: 25
	   /  \
     16    26        Level 2: (26 + 16) / 2 = 26
    /  \     \
   5   27     34     Level 3: (5 + 27 + 34) / 3 = 22
* Sample Output: [25, 26, 22]
*/

// ? If the average ends up being a decimal, floor the value;