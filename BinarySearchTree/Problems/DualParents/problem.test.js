const constructTree = require("../../Starter/ConstructTree");
const dualParent = require("./problem");

// Test Case 1:
test("There are 3 parents with a left and right child", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(dualParent(tree.root)).toEqual(3);
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
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree([43, 25, 65]);
	expect(dualParent(tree.root)).toEqual(1);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("There are no parents with a left and right child", () => {
	const tree = constructTree([17]);
	expect(dualParent(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree([15, 12, 19, 2, 21]);
	expect(dualParent(tree.root)).toEqual(1);
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
	expect(dualParent(null)).toEqual(0);
});

// Test Case 6:
test("There are 3 parents with a left and right child", () => {
	const tree = constructTree([25, 16, 30, 5, 20, 35, 45, 42, 50, 69]);
	expect(dualParent(tree.root)).toEqual(3);
});
/*

	   25                          
      /  \             	   
    15    30     
   /  \     \           
  5   20     35  
                \
                 45
                /  \
              42    50
                      \
                       69           

*/

// Test Case 7:
test("There are 1 parents with a left and right child", () => {
	const tree = constructTree([7, 5, 13, 2, 15]);
	expect(dualParent(tree.root)).toEqual(1);
});
/*

  		  7
  	    /  	\
       5     13
     /         \
    2    	    15

*/

// Test Case 8:
test("There are 0 parents with a left and right child", () => {
	const tree = constructTree([7, 345, 6523, 7542, 63242]);
	expect(dualParent(tree.root)).toEqual(0);
});
/*

 7
  \
   345
	 \
	   6523
		  \
		  7542
			 \
			 63242		

*/