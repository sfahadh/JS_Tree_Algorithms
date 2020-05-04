const Node = require("../../BST/starter");
const grabAllLeaves = require("./problem");

test("Return an array of [1, 6, 9, 15] leaf nodes", () => {
	const tree = new Node(7);
	tree.insert(5);
	tree.insert(13);
	tree.insert(2);
	tree.insert(6);
	tree.insert(9);
	tree.insert(15);
	tree.insert(1);
	expect(grabAllLeaves(tree)).toEqual([6, 9, 15, 1]);
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

test("Return an array of [25, 65] leaf nodes", () => {
	const tree = new Node(43);
	tree.insert(25);
	tree.insert(65);
	expect(grabAllLeaves(tree)).toEqual([25, 65]);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Return an array of [17] leaf nodes", () => {
	const tree = new Node(17);
	expect(grabAllLeaves(tree)).toEqual([17]);
});
/*

  	17

*/

test("Return an array of [2, 8, 16, 21] leaf nodes", () => {
	const tree = new Node(15);
	tree.insert(17);
	tree.insert(3);
	tree.insert(21);
	tree.insert(8);
	tree.insert(2);
	tree.insert(16);
	expect(grabAllLeaves(tree)).toEqual([2, 8, 16, 21]);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("Return an empty array", () => {
	expect(grabAllLeaves(null)).toEqual([]);
});

test("Return an array of [5, 21, 69] leaf nodes", () => {
	const tree = new Node(25);
	tree.insert(16);
	tree.insert(26);
	tree.insert(5);
	tree.insert(21);
	tree.insert(35);
	tree.insert(45);
	tree.insert(47);
	tree.insert(69);
	expect(grabAllLeaves(tree)).toEqual([5, 21, 69]);
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