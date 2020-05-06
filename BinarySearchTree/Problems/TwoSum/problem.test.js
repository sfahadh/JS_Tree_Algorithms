const constructTree = require("../../Starter/ConstructTree");
const twoSum = require("./problem");

// Test Case 1:
test("Return true because there are multiple 2 nodes that can be added to 15", () => {
    const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 0]);
    expect(twoSum(tree.root, 15)).toEqual(true);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  0 

*/

// Test Case 2:
test("Return false because there are no nodes that adds up to 50", () => {
    const tree = constructTree([43, 25, 65]);
    expect(twoSum(tree.root, 50)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return false there is only 1 node in the tree", () => {
    const tree = constructTree([17]);
    expect(twoSum(tree.root, 17)).toEqual(false);
});
/*

  	17

*/

// Test Case 4:
test("Return true because there are 2 nodes that adds up to 18", () => {
    const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
    expect(twoSum(tree.root, 18)).toEqual(true);
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
    expect(twoSum(null, 10)).toEqual(false);
});

// Test Case 6:
test("Return true because there are 2 nodes that adds up to 74", () => {
    const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
    expect(twoSum(tree.root, 74)).toEqual(true);
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
test("Return true because there are 2 nodes that adds up to 1", () => {
    const tree = constructTree([1, 0]);
    expect(twoSum(tree.root, 1)).toEqual(true);
});
/*

  	   1
  	 /	 
   0      

*/

// Test Case 8:
test("Return true because there are 2 nodes that adds up to 3", () => {
    const tree = constructTree([1, 2]);
    expect(twoSum(tree.root, 3)).toEqual(true);
});
/*

   1
    \
     2

*/

// Test Case 9:
test("Return false because there are no nodes that adds up to 125312341234", () => {
    const tree = constructTree([7, 5, 13, 2, 6, 9, 15]);
    expect(twoSum(tree.root, 125312341234)).toEqual(false);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15

*/

// Test Case 10:
test("Return false because there are no nodes that adds up to 7", () => {
    const tree = constructTree([8, 5, 13, 2, 6, 9, 15]);
    expect(twoSum(tree.root, 9)).toEqual(false);
});
/*

  		  8
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15

*/