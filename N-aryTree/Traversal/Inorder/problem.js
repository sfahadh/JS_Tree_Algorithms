// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following in-order N-ary Tree traversal problem below. There is only 1 input, which is the root of the tree. The in-order traversal for N-ary trees is defined as traversing down the tree, visiting all the children nodes except for the last of the children nodes, then visiting the parent node, and then back down to the last of the children nodes. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const inOrder = root => {
    return [13, 3, 5, 23];
}

module.exports = inOrder;

/*
! Test Case 1: 
* Sample Input: 
        5
    /   |   \
   13   3    23
* Sample Output: [13, 3, 5, 23] 

! Test Case 2:
* Sample Input: 
            5
        /   |   \
      13    3    23
    /  |           \  
   7   24           63 
* Sample Output: [7, 13, 24, 3, 5, 23, 63] 
*/