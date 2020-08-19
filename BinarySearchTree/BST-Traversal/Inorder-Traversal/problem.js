// ? In Visual Studo Code, install "Better Comments" to see colorful effects of comments

/* // Uncomment the imports below if you plan on using them
 * const BST = require("../../Starter/BST");
 * const Node = require("../../Starter/Node");
 */

/*
TODO: Complete the following in-order BST traversal problem below. The input is the whole tree structure starting from the root. The returned result must be an array. For in-order traversal, you must traverse towards the left subtree, then go back to the parent, and then go towards the right subtree grabbing each node's data along the way. The result should be a sorted array of node datas.

function BST() {
    this.root = null;
}

function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}
*/

const inOrder = root => {
    const array = [];
    const recurse = root => {
        if (root === null) return [];
        if (root.left) recurse(root.left);
        array.push(root.data);
        if (root.right) recurse(root.right);
    }
    recurse(root);
    console.log(array);
    return array;
}

module.exports = inOrder;

/*
! Test Case:
* Sample Input: refer to Images -> BST-structure-1.png
* Sample Output: [17, 24, 31, 34, 32, 39]
*/