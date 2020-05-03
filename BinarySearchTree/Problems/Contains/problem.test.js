const BST = require("../../Starter/BST");
const contains = require("./problem");

// Test Case 1:
test("Node is deep in the tree", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(contains(tree.root, 9)).toEqual(true);
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

// Test Case 2:
test("Node is in the root of tree - Part I", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(contains(tree.root, 43)).toEqual(true);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Node is in the root of tree - Part II", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(16);
  tree.insert(3);
  tree.insert(21);
  expect(contains(tree.root, 15)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      16
             \
              21

*/

// Test Case 4:
test("Node was not found in tree", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(contains(tree.root, 12)).toEqual(false);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("No nodes in empty tree", () => {
  expect(contains(null, 10)).toEqual(false);
});

// Test Case 6:
test("Node is found in the proximal right subtree from root", () => {
  const tree = new BST();
  tree.insert(122);
  tree.insert(652);
  expect(contains(tree.root, 652)).toEqual(true);
});
/*

  	   122
  	 	   \
          652

*/

// Test Case 7:
test("Node is found in the proximal left subtree from root", () => {
  const tree = new BST();
  tree.insert(652);
  tree.insert(122);
  expect(contains(tree.root, 122)).toEqual(true);
});
/*

  	   652
  	 	/
    122

*/

// Test Case 8:
test("Node is in the deepest part of the tree", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(contains(tree.root, 1)).toEqual(true);
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