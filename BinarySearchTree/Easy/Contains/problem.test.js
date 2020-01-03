const Node = require("../../BST/starter");
const contains = require("./problem");

test("Node is deep in the tree, return true", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(contains(tree, 9)).toEqual(true);
});
/*

  		    7
  	    /	  \
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

test("Node is in the root of tree, return true", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(contains(tree, 25)).toEqual(true);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Return true", () => {
    const tree = new Node(15);
    tree.insert(16);
    tree.insert(3);
    tree.insert(21);
    expect(contains(tree, 15)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      16
             \
              21

*/

test("Node is not in tree, return false", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(contains(tree, 12)).toEqual(false);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("No nodes in empty tree, return false", () => {
  expect(contains(null, 10)).toEqual(false);
});