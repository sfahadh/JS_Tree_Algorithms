/*
Complete the preOrder function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

Link: https://www.hackerrank.com/challenges/tree-preorder-traversal/problem
*/

const preOrder = () => {
    console.log(this.value + " ");
    if (root.left) preOrder(root.left);
    if (root.right) preOrder(root.right);
}

/*
Sample Input: 
     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  

Sample Output:
1 2 5 3 4 6 
*/