const constructTree = require("../../Starter/ConstructTree");
const contains = require("./problem");

// Test Case 1:
test("Node is deep in the tree", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(contains(tree.root, 9)).toEqual(true);
});
/*

  		  7
  	    /	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

// Test Case 2:
test("Node is in the root of tree - Part I", () => {
	const tree = constructTree([43, 25, 65]);
	expect(contains(tree.root, 43)).toEqual(true);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Node is in the root of tree - Part II", () => {
	const tree = constructTree([15, 3, 16, 21]);
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
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
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
	const tree = constructTree([122, 652]);
	expect(contains(tree.root, 652)).toEqual(true);
});
/*

  	122
  	 	\
          652

*/

// Test Case 7:
test("Node is found in the proximal left subtree from root", () => {
	const tree = constructTree([652, 122]);
	expect(contains(tree.root, 122)).toEqual(true);
});
/*

  	   652
  	  /
   122

*/

// Test Case 8:
test("Node is in the deepest part of the tree", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(contains(tree.root, 1)).toEqual(true);
});
/*

  		  7
  	    /	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/