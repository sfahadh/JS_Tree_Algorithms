// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const NaryTree = require("../../Starter/N-aryTree");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following in-order N-ary Tree traversal problem below. There is only 1 input, which is the root of the tree. The in-order traversal for N-ary trees is defined as traversing down the tree, visiting all the children nodes except for the last of the children nodes, then visiting the parent node, and then back down to the last of the children nodes. All nodes visited should be pushed into an array and then returned as a result.

function NaryTree(data = null) {
    this.root = data === null ? null : new Node(data);
    return this.root;
}

function Node(data) {
    this.data = data;
    this.children = [];
}
*/

const inOrder = root => {

}

module.exports = inOrder;

/*
! Test Case 1:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-3.png
* Sample Output: [1, 2, 0, 3]

! Test Case 2:
* Sample Input: //* Sample Image: refer to Images -> Nary-structure-6.png
* Sample Output: [31, 7, 53, 13, 12, 21, 2, 7, 6, 71, 22]
*/