const Node = require("../../BST/starter");
const singleParent = require("./problem");

test("There is only 1 node with a single parent", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(singleParent(tree)).toEqual(1);
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

test("There are no nodes with a single parent", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(singleParent(tree)).toEqual(0);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("There are no nodes with a single parent", () => {
    const tree = new Node(17);
    expect(singleParent(tree)).toEqual(0);
});
/*

  	17

*/

test("There are 2 nodes with a single parent", () => {
    const tree = new Node(15);
    tree.insert(19);
    tree.insert(12);
    tree.insert(21);
    tree.insert(2);
    expect(singleParent(tree)).toEqual(2);
});
/*

  	   15
  	  /	  \
    12     19
   /         \
  2           21

*/

test("Should return 0 because there is no tree", () => {
    expect(singleParent(null)).toEqual(0);
});

test("There 4 nodes with a single parent", () => {
    const tree = new Node(25);
    tree.insert(15);
    tree.insert(30);
    tree.insert(5);
    tree.insert(20);
    tree.insert(35);
    tree.insert(45);
    tree.insert(50);
    tree.insert(69);
    expect(singleParent(tree)).toEqual(4);
});
/*

	   25                          
      /  \             	   
    15    30     
   /  \     \           
  5   20     35  
                \
                 45
                   \
                    50
                      \
                       69           

*/