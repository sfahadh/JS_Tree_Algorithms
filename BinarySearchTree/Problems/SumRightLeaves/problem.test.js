const constructTree = require("../../Starter/ConstructTree");
const sumRightLeaves = require("./problem");

// Test Case 1:
test("The sum of all right leaves should return 21", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(sumRightLeaves(tree.root)).toEqual(21);
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
test("The sum of all right leaves should return 65", () => {
	const tree = constructTree([43, 25, 65]);
	expect(sumRightLeaves(tree.root)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("The sum of all right leaves should return 29", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(sumRightLeaves(tree.root)).toEqual(29);
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
	expect(sumRightLeaves(null)).toEqual(0);
});

// Test Case 6:
test("The sum of all right leaves should return 90", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(sumRightLeaves(tree.root)).toEqual(90);
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
test("The sum of all left leaves should return 0", () => {
	const tree = constructTree([1, 0]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});
/*
  
		1
	  /	 
	0      
  
*/

// Test Case 8:
test("The sum of all right leaves should return 1", () => {
	const tree = constructTree([0, 1]);
	expect(sumRightLeaves(tree.root)).toEqual(1);
});
/*
  
	0
	 \ 
	  1     
  
*/