const constructTree = require("../../Starter/ConstructTree");
const singleParent = require("./problem");

// Test Case 1:
test("There are 1 nodes that are single parents", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(singleParent(tree.root)).toEqual(1);
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
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree([43, 25, 64]);
	expect(singleParent(tree.root)).toEqual(0);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("There is only 1 node in the tree, return 0", () => {
	const tree = constructTree([17]);
	expect(singleParent(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("There are 2 nodes that are single parents", () => {
	const tree = constructTree([15, 12, 19, 2, 21]);
	expect(singleParent(tree.root)).toEqual(2);
});
/*

  	   15
  	  /	  \
    12     19
   /         \
  2           21

*/

// Test Case 5:
test("Should return 0 because there is no tree", () => {
	expect(singleParent(null)).toEqual(0);
});

// Test Case 6:
test("There are 4 nodes that are single parents", () => {
	const tree = constructTree([25, 15, 30, 5, 20, 35, 45, 50, 69]);
	expect(singleParent(tree.root)).toEqual(4);
});
/*

	   25                          
      /  \             	   
    15    30     
   /  \     \           
  5   20     35  
                \
                 45
                   \
                    50
                      \
                       69           

*/

// Test Case 7:
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15]);
	expect(singleParent(tree.root)).toEqual(0);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9    15

*/

// Test Case 8:
test("There are 8 nodes that are single parents", () => {
	const tree = constructTree([25, 15, 30, 5, 35, 4, 45, 3, 50, 2, 69]);
	expect(singleParent(tree.root)).toEqual(8);
});
/*

				25                          
			  /    \             	   
			15      30     
		   /          \           
		  5            35  
		 /				 \
		4				  45
	   /					\
	  3						 50
	 /						   \
	2							69           

*/