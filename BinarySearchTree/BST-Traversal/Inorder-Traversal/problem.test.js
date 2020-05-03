const BST = require("../../Starter/BST")
const Node = require("../../Starter/node");
const inOrder = require("./problem");

test("Return an array of values - [6, 10, 15]", () => {
    const tree = new BST();
    tree.insert(10);
    tree.insert(6);
    tree.insert(15);
    expect(inOrder(tree)).toEqual([6, 10, 15]);
});
/*

     10
    /  \
   6   15  

*/

test("Return an array of value - [33]", () => {
    const tree = new BST(33);
    expect(inOrder(tree)).toEqual([33]);
});
/*

    33  
    
*/

test("Return an array of values - [17, 24, 31, 32, 34, 39]", () => {
    const tree = new BST();
    tree.insert(24);
    tree.insert(17);
    tree.insert(31);
    tree.insert(34);
    // tree.insert(32);
    // tree.insert(39);
    expect(inOrder(tree)).toEqual([17, 24, 31, 32, 34, 39]);
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

test("Return an empty array", () => {
    expect(inOrder(null)).toEqual([]);
});

test("Return an array of values - [0, 3, 5, 13, 18, 33, 65]", () => {
    const tree = new BST(18);
    tree.insert(5);
    tree.insert(13);
    tree.insert(3);
    tree.insert(18);
    tree.insert(65);
    tree.insert(0);
    tree.insert(3);
    tree.insert(33);
    expect(inOrder(tree)).toEqual([0, 3, 5, 13, 18, 33, 65]);
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