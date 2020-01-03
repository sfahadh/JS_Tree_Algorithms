/*
Complete the preOrder function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

Link: https://www.hackerrank.com/challenges/tree-preorder-traversal/problem
*/

const preOrder = root => {
    const array = [];
    const recurse = root => {
        array.push(root.data);
        if (root.left) recurse(root.left);
        if (root.right) recurse(root.right);
    }
    recurse(root);
    return array;
}

module.exports = preOrder;

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
[1, 2, 5, 3, 4, 6] 
*/