// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST contains problem below. There are 2 inputs, the tree and the node that may or may not be located within the tree. Traverse down the tree and check if the node can be found within the tree, if it can, return true, otherwise return false.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const contains = (root, node) => {

}

module.exports = contains;

/*
! Test Case:
Sample Input: 
  		    7
  	    /	  \
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

contains(tree, 6) -> return true  
contains(tree, 12) -> return false
*/