const constructTree = require("../../Starter/ConstructTree");
const countNodes = require("./problem");

// Test Case 1:
test("Return 8 for number of nodes in BST", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(countNodes(tree.root)).toEqual(8);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

// Test Case 2:
test("Return 3 for number of nodes in BST", () => {
	const tree = constructTree([43, 25, 65]);
	expect(countNodes(tree.root)).toEqual(3);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return 1 for number of nodes in BST", () => {
	const tree = constructTree([17]);
	expect(countNodes(tree.root)).toEqual(1);
});
/*

  	17

*/

// Test Case 4:
test("Return 7 for number of nodes in BST", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(countNodes(tree.root)).toEqual(7);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return 0 because there is no tree", () => {
	expect(countNodes(null)).toEqual(0);
});

// Test Case 6:
test("Return 9 for number of nodes in BST", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(countNodes(tree.root)).toEqual(9);
});
/*

	   25                          
	  /  \             	   
    16    26     
   /  \     \           
  5   21     35  
                \
                 45
                   \
                    47
                      \
                       69           

*/

// Test Case 7:
test("Return 2 for number of nodes in BST", () => {
	const tree = constructTree([5724, 1523]);
	expect(countNodes(tree.root)).toEqual(2);
});
/*

  	   5724
  	  /	  
   1523      

*/