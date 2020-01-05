const Node = require("../../BST/starter");
const sum = require("./problem");

test("The sum of all nodes should return 58", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(sum(tree)).toEqual(58);
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

test("The sum of all nodes should return 133", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(sum(tree)).toEqual(133);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("The sum of all nodes should return 17", () => {
    const tree = new Node(17);
    expect(sum(tree)).toEqual(17);
});
/*

  	17

*/

test("The sum of all nodes should return 82", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(sum(tree)).toEqual(82);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("The sum of all nodes should return 0", () => {
  expect(sum(null)).toEqual(0);
});

test("The sum of all nodes should return 289", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(sum(tree)).toEqual(289);
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