const Node = require("../../BST/starter");
const dualParent = require("./problem");

test("There are 3 parents with a left and right child", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(dualParent(tree)).toEqual(3);
});
/*

  		    7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9    15
   /
  1 

*/

test("There is 1 parent with a left and right child", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(dualParent(tree)).toEqual(1);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("There are no parents with a left and right child", () => {
    const tree = new Node(17);
    expect(dualParent(tree)).toEqual(0);
});
/*

  	17

*/

test("There is 1 parent with a left and right child", () => {
    const tree = new Node(15);
    tree.insert(19);
    tree.insert(12);
    tree.insert(21);
    tree.insert(2);
    expect(dualParent(tree)).toEqual(1);
});
/*

  	   15
  	  /	  \
    12     19
   /         \
  2           21

*/

test("Should return 0 because there is no tree", () => {
    expect(dualParent(null)).toEqual(0);
});

test("There are 3 parents with a left and right child", () => {
    const tree = new Node(25);
    tree.insert(15);
    tree.insert(30);
    tree.insert(5);
    tree.insert(20);
    tree.insert(35);
    tree.insert(45);
    tree.insert(50);
    tree.insert(69);
    tree.insert(42);
    expect(dualParent(tree)).toEqual(3);
});
/*

	   25                          
      /  \             	   
    15    30     
   /  \     \           
  5   20     35  
                \
                 45
                /  \
              42    50
                      \
                       69           

*/