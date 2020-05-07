const constructTree = require("../../Starter/ConstructTree");
const minimumDifference = require("./problem");

// Test Case 1:
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(minimumDifference(tree.root)).toEqual(1);
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
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([43, 25, 65]);
	expect(minimumDifference(tree.root)).toEqual(18);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
	const tree = constructTree([17]);
	expect(minimumDifference(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(minimumDifference(tree.root)).toEqual(1);
});
/*

  	   15
  	  /	  \
    12     19
   /  \   /  \
  2    8 16   21

*/

// Test Case 5:
test("The minimum difference should return 0 because there's no tree", () => {
	expect(minimumDifference(null)).toEqual(0);
});

// Test Case 6:
test("The minimum difference in the tree should return 5", () => {
	const tree = constructTree([25, 15, 30, 5, 20, 35, 45, 50, 69]);
	expect(minimumDifference(tree.root)).toEqual(5);
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
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([43, 42, 44]);
	expect(minimumDifference(tree.root)).toEqual(1);
});
/*

  	   43
  	 /	  \
   42      44

*/