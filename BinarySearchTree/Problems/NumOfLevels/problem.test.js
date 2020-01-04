const Node = require("../../BST/starter");
const levels = require("./problem");

test("The BST should return 4 as number of levels", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(levels(tree)).toEqual(4);
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

test("The BST should return 2 as number of levels", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(levels(tree)).toEqual(2);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("The BST should return 1 as number of levels", () => {
    const tree = new Node(17);
    expect(levels(tree)).toEqual(1);
});
/*

  	17

*/

test("The BST should return 3 as number of levels", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(levels(tree)).toEqual(3);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("The BST should return 0 as number of levels", () => {
  expect(levels(null)).toEqual(0);
});

test("The BST should return 6 as number of levels", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(levels(tree)).toEqual(6);
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