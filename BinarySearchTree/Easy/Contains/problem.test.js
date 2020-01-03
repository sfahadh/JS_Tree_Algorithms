const Node = require("../../BST/starter");
const contains = require("./problem");

test("Return true", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(contains(tree, 9)).toEqual(true);
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

test("Return true", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(contains(tree, 25)).toEqual(true);
});
/*

  	   43
  	 /	  \
   25      65

*/