const Node = require("../../BST/starter");
const countNodes = require("./problem");

test("Return 8 for number of nodes in BST", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(countNodes(tree)).toEqual(8);
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

test("Return 3 for number of nodes in BST", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(countNodes(tree)).toEqual(3);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Return 1 for number of nodes in BST", () => {
    const tree = new Node(17);
    expect(countNodes(tree)).toEqual(1);
});
/*

  	17

*/

test("Return 7 for number of nodes in BST", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(countNodes(tree)).toEqual(7);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("Return 0 because there is no tree", () => {
  expect(countNodes(null)).toEqual(0);
});

test("Return 9 for number of nodes in BST", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(countNodes(tree)).toEqual(9);
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