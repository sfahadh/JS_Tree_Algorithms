const constructTree = require("../../Starter/ConstructTree");
const sum = require("./problem");

// Test Case 1:
test("The sum of all nodes should return 58", () => {
    const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
    expect(sum(tree.root)).toEqual(58);
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
test("The sum of all nodes should return 133", () => {
    const tree = constructTree([43, 25, 65]);
    expect(sum(tree.root)).toEqual(133);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The sum of all nodes should return 17", () => {
    const tree = constructTree([17]);
    expect(sum(tree.root)).toEqual(17);
});
/*

  	17

*/

// Test Case 4:
test("The sum of all nodes should return 82", () => {
    const tree = constructTree([15, 3, 17, 2, 8, 16, 21]);
    expect(sum(tree.root)).toEqual(82);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("The sum of all nodes should return 0", () => {
    expect(sum(null)).toEqual(0);
});

// Test Case 6:
test("The sum of all nodes should return 289", () => {
    const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
    expect(sum(tree.root)).toEqual(289);
});
/*

	  25                          
	 /  \             	   
    16   26     
   /  \    \           
  5   21    35  
              \
               45
                 \
                  47
                    \
                     69           

*/

// Test Case 7:
test("The sum of all nodes should return 1", () => {
    const tree = constructTree([1, 0]);
    expect(sum(tree.root)).toEqual(1);
});
/*

  	  1
  	/	 
  0      

*/