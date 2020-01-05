const Node = require("../../BST/starter");
const rangeSum = require("./problem");

test("The range sum value should return 30", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(rangeSum(tree, 5, 9)).toEqual(30);
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

test("The range sum value should return 65", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(rangeSum(tree, 56, 89)).toEqual(65);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("The range sum value should return 0", () => {
    const tree = new Node(17);
    expect(rangeSum(tree, 8, 12)).toEqual(0);
});
/*

  	17

*/

test("The range sum value should return 5", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(rangeSum(tree, 0, 5)).toEqual(5);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("The range sum value should return 0", () => {
  expect(rangeSum(null)).toEqual(0);
});

test("The range sum value should return 289", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(rangeSum(tree, 0, 100)).toEqual(289);
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