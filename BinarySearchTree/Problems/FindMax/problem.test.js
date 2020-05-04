const BST = require("../../Starter/BST");
const findMax = require("./problem");

// Test Case 1:
test("Highest node value in tree is 15", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(findMax(tree.root)).toEqual(15);
});
/*

  		    7 
  	    /	  \
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

// Test Case 2:
test("Highest node value in tree is 65", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(findMax(tree.root)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Highest node value in tree is 27", () => {
  const tree = new BST();
  tree.insert(17);
  tree.insert(12);
  tree.insert(3);
  tree.insert(27);
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
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
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
  const tree = new BST();
  tree.insert(25);
  tree.insert(16);
  tree.insert(26);
  tree.insert(5);
  tree.insert(21);
  tree.insert(35);
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
  const tree = new BST();
  tree.insert(545315);
  expect(findMax(tree.root)).toEqual(545315);
});
/*

  545315

*/