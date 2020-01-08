const Node = require("../../BST/starter");
const cousins = require("./problem");

test("Return false because 1 and 6 are not cousins", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(cousins(tree, 1, 6)).toEqual(false);
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

test("Return false because 25 and 43 are not cousins", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(cousins(tree, 25, 43)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Return false because there is only 1 node", () => {
    const tree = new Node(17);
    expect(cousins(tree, 14, 32)).toEqual(false);
});
/*

  	17

*/

test("Return true because 8 and 21 are not cousins", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(cousins(tree, 8, 21)).toEqual(7);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("Return false because there is no tree", () => {
  expect(cousins(null)).toEqual(false);
});

test("Return true because 5 and 35 are not cousins", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(cousins(tree, 5, 35)).toEqual(true);
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