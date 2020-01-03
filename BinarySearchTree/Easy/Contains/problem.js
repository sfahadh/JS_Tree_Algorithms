/*
Complete the following BST contains problem below. There are 2 inputs, the tree and the node you must find in that tree. if the node cannot be found in the tree, return false, otherwise return true.

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const contains = (tree, node) => {
    if (!tree) return false;
    if (node === tree.data) return true;
    if (node < tree.data) return contains(tree.left, node);
    if (node > tree.data) return contains(tree.right, node);
    return false;
}

module.exports = contains;

/*

  		  7
  	    /	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

contains(tree, 6) -> return true  
contains(tree, 12) -> return false
*/