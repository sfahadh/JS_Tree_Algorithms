// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following pre-order BST traversal problem below. The input is the whole tree structure starting from the root. The returned result must be an array. For pre-order traversal, you must grab the current parent's node data, then traverse towards the left subtree, and then traverse towards the right subtree from the parent while grabbing the node's data from traversing those paths.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const preOrder = root => {

}

module.exports = preOrder;

/*
! Test Case: 
* Sample Input: 
     24
    /  \
   17  31    
         \ 
         34
        /  \
       32  39
* Sample Output: [24, 17, 31, 34, 32, 39] 
*/