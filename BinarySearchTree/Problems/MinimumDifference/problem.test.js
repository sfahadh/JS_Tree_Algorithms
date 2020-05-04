const BST = require("../../Starter/BST");
const minimumDifference = require("./problem");

// Test Case 1:
test("The minimum difference in the tree should return 1", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(minimumDifference(tree.root)).toEqual(1);
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
test("The minimum difference in the tree should return 1", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(minimumDifference(tree.root)).toEqual(18);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
  const tree = new BST();
  tree.insert(17);
  expect(minimumDifference(tree.root)).toEqual(0);
});
/*

  	17

*/

// Test Case 4:
test("The minimum difference in the tree should return 1", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(19);
  tree.insert(12);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(minimumDifference(tree.root)).toEqual(1);
});
/*

  	   15
  	 /	  \
    12     19
   /  \   /  \
  2    8 16   21

*/

// Test Case 5:
test("The minimum difference should return 0 because there's no tree", () => {
  expect(minimumDifference(null)).toEqual(0);
});

// Test Case 6:
test("The minimum difference in the tree should return 5", () => {
  const tree = new BST();
  tree.insert(25);
  tree.insert(15);
  tree.insert(30);
  tree.insert(5);
  tree.insert(20);
  tree.insert(35);
  tree.insert(45);
  tree.insert(50);
  tree.insert(69);
  expect(minimumDifference(tree.root)).toEqual(5);
});
/*

	     25                          
      /  \             	   
    15    30     
   /  \     \           
  5   20     35  
                \
                 45
                   \
                    50
                      \
                       69           

*/

// Test Case 7:
test("The minimum difference in the tree should return 1", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(42);
  tree.insert(44);
  expect(minimumDifference(tree.root)).toEqual(1);
});
/*

  	   43
  	 /	  \
   42      44

*/