const Node = require("../../BST/starter");
const levelOrder = require("./problem");

test("Return an array of values - [10, 6, 15]", () => {
    const tree = new Node(10);
    tree.insert(6);
    tree.insert(15);
    expect(levelOrder(tree)).toEqual([10, 6, 15]);
});
/*

     10
    /  \
   6   15  

*/

test("Return an array of value - [33]", () => {
    const tree = new Node(33);
    expect(levelOrder(tree)).toEqual([33]);
});
/*

    33  
    
*/

test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = new Node(24);
    tree.insert(24);
    tree.insert(17);
    tree.insert(31);
    tree.insert(34);
    tree.insert(32);
    tree.insert(39);
    expect(levelOrder(tree)).toEqual([24, 17, 31, 34, 32, 39]);
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
    expect(levelOrder(null)).toEqual([]);
});

test("Return an array of values - [18, 5, 65, 3, 13, 33, 0]", () => {
    const tree = new Node(18);
    tree.insert(5);
    tree.insert(13);
    tree.insert(3);
    tree.insert(18);
    tree.insert(65);
    tree.insert(0);
    tree.insert(3);
    tree.insert(33);
    expect(levelOrder(tree)).toEqual([18, 5, 65, 3, 13, 33, 0]);
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