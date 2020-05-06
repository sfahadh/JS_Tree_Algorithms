const constructTree = require("../../Starter/ConstructTree");
const sumLeftLeaves = require("./problem");

// Test Case 1:
test("The sum of all left leaves should return 10", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(sumLeftLeaves(tree.root)).toEqual(10);
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
test("The sum of all left leaves should return 25", () => {
	const tree = constructTree([43, 25, 65]);
	expect(sumLeftLeaves(tree.root)).toEqual(25);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumLeftLeaves(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("The sum of all left leaves should return 18", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21])
	expect(sumLeftLeaves(tree.root)).toEqual(18);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("There is no tree, should return 0", () => {
	expect(sumLeftLeaves(null)).toEqual(0);
});

// Test Case 6:
test("The sum of all left leaves should return 5", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(sumLeftLeaves(tree.root)).toEqual(5);
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
test("The sum of all nodes should return 0", () => {
	const tree = constructTree([1, 0]);
	expect(sumLeftLeaves(tree.root)).toEqual(0);
});
/*
  
		1
	  /	 
	0      
  
*/