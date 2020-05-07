const constructTree = require("../../Starter/ConstructTree");
const findMax = require("./problem");

// Test Case 1:
test("Highest node value in tree is 15", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(findMax(tree.root)).toEqual(15);
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
test("Highest node value in tree is 65", () => {
	const tree = constructTree([43, 25, 65]);
	expect(findMax(tree.root)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Highest node value in tree is 27", () => {
	const tree = constructTree([17, 3, 12, 27]);
	expect(findMax(tree.root)).toEqual(27);
});
/*

  	   17
  	 /	  \
    3      12
             \
              27

*/

// Test Case 4:
test("Highest node value in tree is 21", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(findMax(tree.root)).toEqual(21);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("There is no tree, should return null", () => {
	expect(findMax(null)).toEqual(null);
});

// Test Case 6:
test("Highest node value in tree is 35", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35]);
	expect(findMax(tree.root)).toEqual(35);
});
/*

	    25                          
	   /  \             	   
     16    26     
    /  \     \           
   5   21     35             

*/

// Test Case 7:
test("Highest node value in tree is 545315", () => {
	const tree = constructTree([545315]);
	expect(findMax(tree.root)).toEqual(545315);
});
/*

  545315

*/