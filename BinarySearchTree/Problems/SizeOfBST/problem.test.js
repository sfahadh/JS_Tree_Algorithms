const Node = require("../../BST/starter");
const size = require("./problem");

test("Size of the BST is 4", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(size(tree)).toEqual(4);
});
/*

  		  7
  	    /	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

test("Size of the BST is 2", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(size(tree)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Size of the BST is 1", () => {
    const tree = new Node(17);
    expect(size(tree)).toEqual(1);
});
/*

  	17

*/

test("Size of the BST is 3", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(size(tree)).toEqual(3);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("There is no tree, size of the BST is 0", () => {
  expect(size(null)).toEqual(0);
});

test("Size of the BST is 6", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(size(tree)).toEqual(6);
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