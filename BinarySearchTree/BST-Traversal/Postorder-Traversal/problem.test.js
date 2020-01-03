const Node = require("../../BST/starter");
const postOrder = require("./problem");

test("Return an array of values - [10, 6, 15]", () => {
    const node = new Node(10);
    node.insert(6);
    node.insert(15);
    expect(postOrder(node)).toEqual([6, 15, 10]);
});
/*

     10
    /  \
   6   15  

*/

test("Return an array of value - [33]", () => {
    const node = new Node(33);
    expect(postOrder(node)).toEqual([33]);
});
/*

    33  
    
*/

test("Return an array of values - [17, 32, 39, 34, 31, 24]", () => {
    const node = new Node(24);
    node.insert(24);
    node.insert(17);
    node.insert(31);
    node.insert(34);
    node.insert(32);
    node.insert(39);
    expect(postOrder(node)).toEqual([17, 32, 39, 34, 31, 24]);
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
    const node = new Node(18);
    node.insert(5);
    node.insert(13);
    node.insert(3);
    node.insert(18);
    node.insert(65);
    node.insert(0);
    node.insert(3);
    node.insert(33);
    expect(postOrder(node)).toEqual([0, 3, 13, 5, 33, 65, 18]);
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