const BST = require("../../Starter/BST");
const findMin = require("./problem");

// Test Case 1:
test("Lowest node value in tree is 1", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(findMin(tree.root)).toEqual(1);
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
test("Lowest node value in tree is 25", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(findMin(tree.root)).toEqual(25);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Lowest node value in tree is 3", () => {
  const tree = new BST();
  tree.insert(17);
  tree.insert(12);
  tree.insert(3);
  tree.insert(27);
  expect(findMin(tree.root)).toEqual(3);
});
/*

  	   17
  	 /	  \
    3      12
             \
              27

*/

// Test Case 4:
test("Lowest node value in tree is 2", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(findMin(tree.root)).toEqual(2);
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
  expect(findMin(null)).toEqual(null);
});

// Test Case 6:
test("Lowest node value in tree is 5", () => {
  const tree = new BST();
  tree.insert(25);
  tree.insert(16);
  tree.insert(26);
  tree.insert(5);
  tree.insert(21);
  tree.insert(35);
  expect(findMin(tree.root)).toEqual(5);
});
/*

	      25                          
	     /  \             	   
     16    26     
    /  \     \           
   5   21     35             

*/

// Test Case 7:
test("Lowest node value in tree is 5234523", () => {
  const tree = new BST();
  tree.insert(5234523);
  expect(findMin(tree.root)).toEqual(5234523);
});
/*

  5234523
       
*/