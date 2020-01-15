const Node = require("../../BST/starter");
const findHeight = require("./problem");

test("From the root of the BST to the node, the height is 2", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(findHeight(tree, 2)).toEqual(2);
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

test("From the root of the BST to the node, the height is 1", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(findHeight(tree, 25)).toEqual(1);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("From the root of the BST to the node, the height is 0", () => {
    const tree = new Node(17);
    expect(findHeight(tree, 17)).toEqual(0);
});
/*

  	17

*/

test("Node not found in BST, should return 0", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(findHeight(tree, 24)).toEqual(0);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("Should return 0 as there is no tree", () => {
  expect(findHeight(null)).toEqual(0);
});

test("From the root of the BST to the node, the height is 5", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(findHeight(tree, 69)).toEqual(5);
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