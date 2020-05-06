const constructTree = require("../../Starter/ConstructTree");
const avgLevel = require("./problem");

// Test Case 1:
test("The average levels of BST are [7, 9, 8, 1]", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(avgLevel(tree.root)).toEqual([7, 9, 8, 1]);
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
test("The average levels of BST are [43, 45]", () => {
	const tree = constructTree([43, 25, 65]);
	expect(avgLevel(tree.root)).toEqual([43, 45]);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The average levels of BST are [17]", () => {
	const tree = constructTree([17]);
	expect(avgLevel(tree.root)).toEqual([17]);
});
/*

  	17

*/

// Test Case 4:
test("The average levels of BST are [15, 10, 12]", () => {
	const tree = constructTree([15, 3, 17, 2, 9, 16, 21]);
	expect(avgLevel(tree.root)).toEqual([15, 10, 12]);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    9  16   21

*/

// Test Case 5:
test("The average levels of BST are []", () => {
	expect(avgLevel(null)).toEqual([]);
});

// Test Case 6:
test("The average levels of BST are [25, 21, 20, 45, 47, 69]", () => {
	const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
	expect(avgLevel(tree.root)).toEqual([25, 21, 20, 45, 47, 69]);
});
/*

	    25                          
	   /  \             	   
     16    26     
    /  \     \           
   4   21     35  
                \
                 45
                   \
                    47
                      \
                       69           

*/

// Test Case 7:
test("The average levels of BST are [69, 96]", () => {
	const tree = constructTree([69, 96]);
	expect(avgLevel(tree.root)).toEqual([69, 96]);
});
/*

  	   69
  	 	 \
          96

*/

// Test Case 8:
test("The average levels of BST are [96, 69]", () => {
	const tree = constructTree([96, 69]);
	expect(avgLevel(tree.root)).toEqual([96, 69]);
});
/*

  	   96
  	  /
    69

*/