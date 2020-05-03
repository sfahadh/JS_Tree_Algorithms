const BST = require("../../Starter/BST");
const countNodes = require("./problem");

// Test Case 1:
test("Return 8 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(7);
	tree.insert(5);
	tree.insert(13);
	tree.insert(2);
	tree.insert(6);
	tree.insert(9);
	tree.insert(15);
	tree.insert(1);
	expect(countNodes(tree.root)).toEqual(8);
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
test("Return 3 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(43);
	tree.insert(25);
	tree.insert(65);
	expect(countNodes(tree.root)).toEqual(3);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return 1 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(17)
	expect(countNodes(tree.root)).toEqual(1);
});
/*

  	17

*/

// Test Case 4:
test("Return 7 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(15);
	tree.insert(17);
	tree.insert(3);
	tree.insert(21);
	tree.insert(8);
	tree.insert(2);
	tree.insert(16);
	expect(countNodes(tree.root)).toEqual(7);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return 0 because there is no tree", () => {
	expect(countNodes(null)).toEqual(0);
});

// Test Case 6:
test("Return 9 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(25);
	tree.insert(16);
	tree.insert(26);
	tree.insert(5);
	tree.insert(21);
	tree.insert(35);
	tree.insert(45);
	tree.insert(47);
	tree.insert(69);
	expect(countNodes(tree.root)).toEqual(9);
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
test("Return 2 for number of nodes in BST", () => {
	const tree = new BST();
	tree.insert(5724);
	tree.insert(1523);
	expect(countNodes(tree.root)).toEqual(2);
});
/*

  	   5724
  	  /	  
   1523      

*/