// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST dual parents problem below. There is only 1 input, which is the root of the BST and the goal is to find the number of parents that have 2 childrens. In other words, the parent node should have both a left and right subtree branch or leaf nodes.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const dualParent = root => {

}

module.exports = dualParent;

/*
! Test Case:
* Sample Input:
	    25                          
	   /  \             	   
     16    26     
    /  \     \           
   5   21     35             
* Sample Output: 2
? Both 25 and 16 have 2 child nodes
*/