const constructTree = require("../../Starter/ConstructTree");
const sameParent = require("./problem");

// Test Case 1:
test("Return true because 5 and 13 does have the same parent", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(sameParent(tree.root, 5, 13)).toEqual(true);
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
test("Return false because 25 and 43 does not have the same parent", () => {
	const tree = constructTree([43, 25, 65]);
	expect(sameParent(tree.root, 25, 43)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return false because there is only 1 node", () => {
	const tree = constructTree([17]);
	expect(sameParent(tree.root, 14, 32)).toEqual(false);
});
/*

  	17

*/

// Test Case 4:
test("Return false because 8 and 16 does not have the same parent", () => {
	const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
	expect(sameParent(tree.root, 8, 16)).toEqual(false);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return false because there is no tree", () => {
	expect(sameParent(null)).toEqual(false);
});

// Test Case 6:
test("Return true because 5 and 21 does have the same parent", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 24, 45, 47, 69]);
	expect(sameParent(tree.root, 5, 21)).toEqual(true);
});
/*

	   25                          
	  /  \             	   
    16    26     
   /  \     \           
  5    21    35  
         \     \
          24    45
                  \
                   47
                     \
                      69           

*/

// Test Case 7:
test("Return false because 3 and 17 does not have the same parent", () => {
	const tree = constructTree([15, 3, 17, 2, 21]);
	expect(sameParent(tree.root, 3, 17)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /          \
 2            21

*/