const Node = require("../../BST/starter");
const minimumDifference = require("./problem");

test("The minimum difference in the tree should return 1", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(minimumDifference(tree)).toEqual(1);
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

test("The minimum difference in the tree should return 1", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(minimumDifference(tree)).toEqual(18);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
    const tree = new Node(17);
    expect(minimumDifference(tree)).toEqual(0);
});
/*

  	17

*/

test("The minimum difference in the tree should return 1", () => {
    const tree = new Node(15);
    tree.insert(19);
    tree.insert(12);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(minimumDifference(tree)).toEqual(2);
});
/*

  	   15
  	 /	  \
    12     19
   /  \   /  \
  2    8 16   21

*/

test("The minimum difference should return 0 because there's no tree", () => {
  expect(minimumDifference(null)).toEqual(0);
});

test("The minimum difference in the tree should return 5", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(30);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(50);
    tree.insert(69);
    expect(minimumDifference(tree)).toEqual(5);
});
/*

	   25                          
      /  \             	   
    16    30     
   /  \     \           
  5   21     35  
                \
                 45
                   \
                    50
                      \
                       69           

*/