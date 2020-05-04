const BST = require("../../Starter/BST");
const findHeight = require("./problem");

// Test Case 1:
test("From the root of the BST to the node, the height is 3", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(findHeight(tree.root, 2)).toEqual(3);
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
test("From the root of the BST to the node, the height is 2", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(findHeight(tree.root, 25)).toEqual(2);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("From the root of the BST to the node, the height is 1", () => {
  const tree = new BST();
  tree.insert(17);
  expect(findHeight(tree.root, 17)).toEqual(1);
});
/*

  	17

*/

// Test Case 4:
test("Node not found in BST, should return 1", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(findHeight(tree.root, 24)).toEqual(1);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Should return 0 as there is no tree", () => {
  expect(findHeight(null)).toEqual(0);
});

// Test Case 6:
test("From the root of the BST to the node, the height is 6", () => {
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
  expect(findHeight(tree.root, 69)).toEqual(6);
});
/*

	      25                          
	    /   \             	   
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
test("From the root of the BST to the node, the height is 3", () => {
  const tree = new BST();
  tree.insert(3);
  tree.insert(2);
  tree.insert(4);
  tree.insert(1);
  tree.insert(5);
  expect(findHeight(tree.root, 1)).toEqual(3);
});
/*

        3
      /	  \
     2     4
    /       \
   1         5

*/

// Test Case 8:
test("Node is not located anywhere in the BST", () => {
  const tree = new BST();
  tree.insert(3);
  tree.insert(2);
  tree.insert(4);
  tree.insert(1);
  tree.insert(5);
  expect(findHeight(tree.root, 3214)).toEqual(0);
});
/*

        3
      /	  \
     2     4
    /       \
   1         5
   
*/