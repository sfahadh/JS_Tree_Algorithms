// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST level problem below. There is only one input, which is the root of the BST and the goal is to find the height of the BST or the number of levels it has. 

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const levels = root => {
    if (!root) return 0;
    let level = 1;
    const queue = [root, "level"];
    while (queue.length > 1) {
        const branch = queue.shift();
        if (branch.left && branch !== "level") queue.push(branch.left);
        if (branch.right && branch !== "level") queue.push(branch.right);

        if (!queue.includes("level")) queue.push("level");
        if (branch === "level") {
            level++;
        }
    }
    return level;
}

module.exports = levels;

/*
! Test Case:
* Sample Input:
	    25         -> level 1
	   /  \
     16    26      -> level 2
    /  \     \
   5   21     35   -> level 3
* Sample Output: 3
*/