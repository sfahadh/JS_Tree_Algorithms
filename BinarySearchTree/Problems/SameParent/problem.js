// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST same parent problem below. There are 3 inputs, which are the root of the BST, and 2 child nodes. Traverse down the tree and find the two child nodes, determine whether they have the same parent or not. If they do, return true, otherwise return false.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const sameParent = (root, n1, n2) => {

}

module.exports = sameParent;

/*
* Sample Tree Root:
	     25                   
	   /    \             	   
     16      26      
    /  \    /  \           
   5   21  24   35      

! Test Case 1:
Input: (root, 16, 26)
Output: true

! Test Case 2:
Input: (root, 16, 24)
Output: false

! Test Case 3:
Input: (root, 5, 24)
Output: false
*/