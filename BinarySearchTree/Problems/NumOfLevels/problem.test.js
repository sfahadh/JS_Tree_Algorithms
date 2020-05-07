const constructTree = require("../../Starter/ConstructTree");
const levels = require("./problem");

// Test Case 1:
test("The BST should return 4 as number of levels", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(levels(tree.root)).toEqual(4);
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
test("The BST should return 2 as number of levels", () => {
	const tree = constructTree([43, 25, 65]);
	expect(levels(tree.root)).toEqual(2);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The BST should return 1 as number of levels", () => {
	const tree = constructTree([17]);
	expect(levels(tree.root)).toEqual(1);
});
/*

  	17

*/

// Test Case 4:
test("The BST should return 3 as number of levels", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(levels(tree.root)).toEqual(3);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("The BST should return 0 as number of levels", () => {
	expect(levels(null)).toEqual(0);
});

// Test Case 6:
test("The BST should return 6 as number of levels", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(levels(tree.root)).toEqual(6);
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

// Test Case 6:
test("The BST should return 6 as number of levels", () => {
	const tree = constructTree([25, 26, 35, 45, 47, 69, 98]);
	expect(levels(tree.root)).toEqual(7);
});
/*

  25                          
    \             	   
     26     
       \           
        35  
          \
           45
             \
              47
                \
                 69    
                   \       
                    98
*/