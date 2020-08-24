// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following post-order N-ary Tree traversal problem below. There is only 1 input, which is the root of the tree. The post-order traversal for N-ary trees is defined as traversing down the tree, visiting all the children nodes first, and then visiting the parent node. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const postOrder = root => {

}

module.exports = postOrder;

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
* Sample Output: [7, 24, 13, 3, 63, 23, 5]
*/