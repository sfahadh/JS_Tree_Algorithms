const BST = require("../../Starter/BST");
const constructTree = require("../../Starter/ConstructTree");
const postOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree([10, 6, 15]);
    expect(postOrder(tree.root)).toEqual([6, 15, 10]);
});
/*

     10
    /  \
   6   15  

*/

// Test Case 2:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(postOrder(tree.root)).toEqual([33]);
});
/*

    33  
    
*/

// Test Case 3:
test("Return an array of values - [17, 32, 39, 34, 31, 24]", () => {
    const tree = constructTree([24, 17, 31, 34, 32, 39]);
    expect(postOrder(tree.root)).toEqual([17, 32, 39, 34, 31, 24]);
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
    expect(postOrder(null)).toEqual([]);
});

// Test Case 5:
test("Return an array of values - [0, 3, 13, 5, 33, 65, 18]", () => {
    const tree = constructTree([18, 5, 65, 3, 13, 33, 0]);
    expect(postOrder(tree.root)).toEqual([0, 3, 13, 5, 33, 65, 18]);
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
test("Return an array of values - [123, 62]", () => {
    const tree = constructTree([62, 123]);
    expect(postOrder(tree.root)).toEqual([123, 62]);
});
/*

     62
       \
       123  

*/

// Test Case 7:
test("Return an array of values - [13, 62]", () => {
    const tree = constructTree([62, 13]);
    expect(postOrder(tree.root)).toEqual([13, 62]);
});
/*

     62
    /   
  13  

*/

// Test Case 8:
test("Return an array of values - [3, 5, 4, 7, 9, 8, 6]", () => {
    const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
    expect(postOrder(tree.root)).toEqual([3, 5, 4, 7, 9, 8, 6]);
});
/*

         6
       /   \
      4     8    
    /  \   /  \
   3    5 7    9   

*/