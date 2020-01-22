/*
Complete the following BST sum right leaves problem below. There is only 1 input, which is the root of the BST and the goal is to add up all the right leaves and return the total.

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const sumRightLeaves = root => {
  if (!root) return 0;
  if (root.right && !root.right.left && !root.right.right) {
    return root.right.data + sumRightLeaves(root.left);
  }
  return sumRightLeaves(root.left) + sumRightLeaves(root.right);
}

module.exports = sumRightLeaves;

/*

	       25                   
	     /    \           	   
     16      26      
    /  \    /  \           
   5   21  24   35      

21 + 35 = 56
*/