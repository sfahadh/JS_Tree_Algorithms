const constructTree = require("../../Starter/ConstructTree");
const findHeight = require("./problem");

// Test Case 1:
test("From the root of the BST to the node, the height is 3 - Part I", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(findHeight(tree.root, 2)).toEqual(3);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9    15
   /
  1 

*/

// Test Case 2:
test("From the root of the BST to the node, the height is 2", () => {
	const tree = constructTree([43, 25, 65]);
	expect(findHeight(tree.root, 25)).toEqual(2);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("From the root of the BST to the node, the height is 1", () => {
	const tree = constructTree([17]);
	expect(findHeight(tree.root, 17)).toEqual(1);
});
/*

  	17

*/

// Test Case 4:
test("Node not found in BST, should return 0", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(findHeight(tree.root, 24)).toEqual(0);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Should return 0 as there is no tree", () => {
	expect(findHeight(null)).toEqual(0);
});

// Test Case 6:
test("From the root of the BST to the node, the height is 6", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(findHeight(tree.root, 69)).toEqual(6);
});
/*

	    25                          
	  /   \             	   
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
test("From the root of the BST to the node, the height is 3 - Part II", () => {
	const tree = constructTree([3, 2, 4, 1, 6]);
	expect(findHeight(tree.root, 1)).toEqual(3);
});
/*

        3
      /	  \
     2     4
    /       \
   1         5

*/

// Test Case 8:
test("Node is not located anywhere in the BST", () => {
	const tree = constructTree([3, 2, 4, 1, 6]);
	expect(findHeight(tree.root, 3214)).toEqual(0);
});
/*

        3
      /	  \
     2     4
    /       \
   1         5
   
*/