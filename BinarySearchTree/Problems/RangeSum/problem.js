// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following BST range sum problem below. There are 3 inputs, the root of the tree, the lower range value, and the higher range value. The goal is to find the node values that are in between the lower range value and higher range value and then return the sum of those node values. 

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const rangeSum = (root, low, high) => {

}

module.exports = rangeSum;

/*
! Test Case: 

Sample Tree Root:

	    25                   
	   /  \             	   
     16    26      
    /  \     \           
   5   21     35    
   
Input: (root, 14, 26)
Greater than 14 & Less than 26:
    { data: 16, left: 5, right, 21 }
    { data: 21, left: null, right, null }
    { data: 25, left: 16, right, 26 }
    { data: 26, left: null, right, 35 }
Output: (16 + 21 + 25 + 26) = 88
*/