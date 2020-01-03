/*
Complete the following pre-order BST traversal problem below. The input is the whole tree structure starting from the root. The returned result must be an array.
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
     24
    /  \
   17  31    
         \ 
         34
        /  \
       32  39

Sample Output:
[24, 17, 31, 34, 32, 39] 
*/