/*
Complete the following BST cousins problem below. There are 3 inputs, the root, and 2 nodes in the BST. The goal is to check if the 2 nodes are cousins and return true if so, otherwise return false. Cousins are identified as having the same grandparents but different parents.  

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/
const cousins = (root, n1, n2) => {
}

module.exports = cousins;

/*

	    25                   
	   /  \             	   
     16    26      
    /  \     \           
   5   21     35         

Example 1:
    Input: root = BST, n1 = 21, n2 = 35
    Output: true

Example 2: 
    Input: root = BST, n1 = 5, n2 = 21
    Output: false
*/