// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following level-order N-ary Tree traversal problem below. There is only 1 input, which is the root of the tree. The level-order traversal for N-ary trees is defined as traversing down the tree, starting from the root, which is the first row or level of the tree, visit that node and then go down a level, grabbing all the child nodes starting from the left and moving on towards the right. Then repeat that step by going down to the next level until you reach the last. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const levelOrder = root => {

}

module.exports = levelOrder;

/*
! Test Case 1: 
* Sample Input: 
        5
    /   |   \
  13    3    23
* Sample Output: [13, 3, 23, 5] 

! Test Case 2:
* Sample Input: 
            5
        /   |   \
      13    3    23
    /  |           \  
   7   24           63 
* Sample Output: [7, 24, 63, 13, 3, 23, 5] 
*/