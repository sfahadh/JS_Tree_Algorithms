const Node = require("../../BST/starter");
const sumRightLeaves = require("./problem");

test("The sum of all right leaves should return 21", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(sumRightLeaves(tree)).toEqual(21);
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

test("The sum of all right leaves should return 65", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(sumRightLeaves(tree)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("There is only 1 node, should return 0", () => {
    const tree = new Node(17);
    expect(sumRightLeaves(tree)).toEqual(0);
});
/*

  	17

*/

test("The sum of all right leaves should return 29", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(sumRightLeaves(tree)).toEqual(29);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("There is no tree, should return 0", () => {
  expect(sumRightLeaves(null)).toEqual(0);
});

test("The sum of all right leaves should return 90", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(sumRightLeaves(tree)).toEqual(90);
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