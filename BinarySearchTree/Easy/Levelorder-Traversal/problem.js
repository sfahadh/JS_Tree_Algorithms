/*
Complete the following level-order BST traversal problem below. The input is the whole tree structure starting from the root. The returned result must be an array.
*/

const levelOrder = root => {
      if (root === null) return [];
      const array = [];
      const queue = [root];
      while (queue.length) {
            const branch = queue.shift();
            array.push(branch.data);
            if (branch.left) queue.push(branch.left);
            if (branch.right) queue.push(branch.right);
      }
      return array;
}

module.exports = levelOrder;

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