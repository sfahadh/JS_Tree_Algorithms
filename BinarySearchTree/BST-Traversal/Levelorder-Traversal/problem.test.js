const BST = require("../../Starter/BST");
const levelOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [10, 6, 15]", () => {
    const tree = new BST();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    expect(levelOrder(tree.root)).toEqual([10, 6, 15]);
});
/*

     10
    /  \
   6   15  

*/

// Test Case 2:
test("Return an array of value - [33]", () => {
    const tree = new BST();
    tree.insert(33);
    expect(levelOrder(tree.root)).toEqual([33]);
});
/*

    33  
    
*/

// Test Case 3:
test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = new BST();
    tree.insert(24);
    tree.insert(17);
    tree.insert(31);
    tree.insert(34);
    tree.insert(32);
    tree.insert(39);
    expect(levelOrder(tree.root)).toEqual([24, 17, 31, 34, 32, 39]);
});
/*

     24
    /  \
   17  31    
         \ 
         34
        /  \
       32  39

*/

// Test Case 4:
test("Return an empty array", () => {
    expect(levelOrder(null)).toEqual([]);
});

// Test Case 5:
test("Return an array of values - [18, 5, 65, 3, 13, 33, 0]", () => {
    const tree = new BST();
    tree.insert(18);
    tree.insert(5);
    tree.insert(13);
    tree.insert(3);
    tree.insert(65);
    tree.insert(0);
    tree.insert(3);
    tree.insert(33);
    expect(levelOrder(tree.root)).toEqual([18, 5, 65, 3, 13, 33, 0]);
});
/*

         18
       /    \
      5     65    
    /  \   /   
   3   13 33 
  /         
 0          

*/

// Test Case 6:
test("Return an array of values - [62, 123]", () => {
    const tree = new BST();
    tree.insert(62);
    tree.insert(123);
    expect(levelOrder(tree.root)).toEqual([62, 123]);
});
/*

     62
       \
       123  

*/

// Test Case 7:
test("Return an array of values - [62, 13]", () => {
    const tree = new BST();
    tree.insert(62);
    tree.insert(13);
    expect(levelOrder(tree.root)).toEqual([62, 13]);
});
/*

     62
    /   
  13  

*/

// Test Case 8:
test("Return an array of values - [6, 4, 8, 3, 5, 7, 9]", () => {
    const tree = new BST();
    tree.insert(6);
    tree.insert(4);
    tree.insert(8);
    tree.insert(3);
    tree.insert(5);
    tree.insert(7);
    tree.insert(9);
    expect(levelOrder(tree.root)).toEqual([6, 4, 8, 3, 5, 7, 9]);
});
/*

         6
       /   \
      4     8    
    /  \   /  \
   3    5 7    9   

*/