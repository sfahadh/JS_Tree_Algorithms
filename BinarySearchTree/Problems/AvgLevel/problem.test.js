const Node = require("../../BST/starter");
const avgLevel = require("./problem");

test("The average levels of BST are [7, 9, 8, 1]", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(avgLevel(tree)).toEqual([7, 9, 8, 1]);
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

test("The average levels of BST are [43, 45]", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(avgLevel(tree)).toEqual([43, 45]);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("The average levels of BST are [17]", () => {
    const tree = new Node(17);
    expect(avgLevel(tree)).toEqual([17]);
});
/*

  	17

*/

test("The average levels of BST are [15, 10, 12]", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(9);
    tree.insert(2);
    tree.insert(16);
    expect(avgLevel(tree)).toEqual([15, 10, 12]);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    9  16   21

*/

test("The average levels of BST are []", () => {
  expect(avgLevel(null)).toEqual([]);
});

test("The average levels of BST are [25, 21, 20, 45, 47, 69]", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(4);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(avgLevel(tree)).toEqual([25, 21, 20, 45, 47, 69]);
});
/*

	    25                          
	   /  \             	   
     16    26     
    /  \     \           
   4   21     35  
                \
                 45
                   \
                    47
                      \
                       69           

*/