// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following post-order BST traversal problem below. The input is the whole tree structure starting from the root. The returned result must be an array. For post-order traversal, you must traverse towards the left subtree, then go towards the right subtree, and then back to the parents, grabbing each node's data along the way.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const postOrder = root => {

}

module.exports = postOrder;

/*
! Test Case:

Sample Input: 
     24
    /  \
   17  31    
         \ 
         34
        /  \
       32  39

Sample Output: [17, 32, 39, 34, 31, 24] 
*/