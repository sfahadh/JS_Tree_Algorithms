// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following pre-order N-ary Tree traversal problem below. There is only 1 input, which is the root of the tree. The pre-order traversal for N-ary trees is defined as traversing down the tree, visiting the parent node first and then the children starting from the left going towards the right. If a child in the left has children of its own, visit its children before move on towards the right. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const preOrder = root => {

}

module.exports = preOrder;

/*
! Test Case 1: 
* Sample Input: 
        5
    /   |   \
   13   3    23
* Sample Output: [5, 13, 3, 23] 

! Test Case 2:
* Sample Input: 
            5
        /   |   \
      13    3    23
    /  |           \  
   7   24           63 
* Sample Output: [5, 13, 17, 24, 3, 23, 63] 
*/