const constructTree = require("../../Starter/ConstructTree");
const rangeSum = require("./problem");

// Test Case 1:
test("The range sum value should return 30", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(rangeSum(tree.root, 5, 9)).toEqual(27);
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
test("The range sum value should return 65", () => {
	const tree = constructTree([43, 25, 65]);
	expect(rangeSum(tree.root, 56, 89)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The range sum value should return 0", () => {
	const tree = constructTree([17]);
	expect(rangeSum(tree.root, 8, 12)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("The range sum value should return 5", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(rangeSum(tree.root, 0, 5)).toEqual(5);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("The range sum value should return 0", () => {
	expect(rangeSum(null, 15, 65)).toEqual(0);
});

// Test Case 6:
test("The range sum value should return 289", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(rangeSum(tree.root, 0, 100)).toEqual(289);
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
test("The range sum value should return 0 because there are no node values in range", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(rangeSum(tree.root, 22, 45)).toEqual(0);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 8:
test("The range sum value should return 15", () => {
	const tree = constructTree([7, 5, 13, 9, 15]);
	expect(rangeSum(tree.root, 15, 16)).toEqual(15);
});
/*

      7
    /  	\
   5     13
        /   \
       9    15

*/

// Test Case 9:
test("The range sum value should return 25", () => {
	const tree = constructTree([43, 25, 65]);
	expect(rangeSum(tree.root, 0, 25)).toEqual(25);
});
/*

  	   43
  	 /	  \
   25      65

*/