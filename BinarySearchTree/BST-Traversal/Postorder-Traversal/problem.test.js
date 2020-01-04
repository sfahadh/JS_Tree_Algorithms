const Node = require("../../BST/starter");
const postOrder = require("./problem");

test("Return an array of values - [10, 6, 15]", () => {
    const tree = new Node(10);
    tree.insert(6);
    tree.insert(15);
    expect(postOrder(tree)).toEqual([6, 15, 10]);
});
/*

     10
    /  \
   6   15  

*/

test("Return an array of value - [33]", () => {
    const tree = new Node(33);
    expect(postOrder(tree)).toEqual([33]);
});
/*

    33  
    
*/

test("Return an array of values - [17, 32, 39, 34, 31, 24]", () => {
    const tree = new Node(24);
    tree.insert(24);
    tree.insert(17);
    tree.insert(31);
    tree.insert(34);
    tree.insert(32);
    tree.insert(39);
    expect(postOrder(tree)).toEqual([17, 32, 39, 34, 31, 24]);
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
    expect(postOrder(null)).toEqual([]);
});

test("Return an array of values - [0, 3, 13, 5, 33, 65, 18]", () => {
    const tree = new Node(18);
    tree.insert(5);
    tree.insert(13);
    tree.insert(3);
    tree.insert(18);
    tree.insert(65);
    tree.insert(0);
    tree.insert(3);
    tree.insert(33);
    expect(postOrder(tree)).toEqual([0, 3, 13, 5, 33, 65, 18]);
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