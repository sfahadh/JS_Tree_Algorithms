const Node = require("../../BST/starter");
const twoSum = require("./problem");

test("Should return true, there are 2 nodes that adds up to the value", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    expect(twoSum(tree, 15)).toEqual(true);
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

test("Should return false, there are no nodes that adds up to the value", () => {
    const tree = new Node(43);
    tree.insert(25);
    tree.insert(65);
    expect(twoSum(tree, 50)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

test("Should return false, there is only 1 node in the tree", () => {
    const tree = new Node(17);
    expect(twoSum(tree, 17)).toEqual(false);
});
/*

  	17

*/

test("Should return true, there are 2 nodes that adds up to the value", () => {
    const tree = new Node(15);
    tree.insert(17);
    tree.insert(3);
    tree.insert(21);
    tree.insert(8);
    tree.insert(2);
    tree.insert(16);
    expect(twoSum(tree, 18)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

test("Should return false, there is no tree", () => {
  expect(twoSum(null, 10)).toEqual(false);
});

test("Should return true, there are 2 nodes that adds up to the value", () => {
    const tree = new Node(25);
    tree.insert(16);
    tree.insert(26);
    tree.insert(5);
    tree.insert(21);
    tree.insert(35);
    tree.insert(45);
    tree.insert(47);
    tree.insert(69);
    expect(twoSum(tree, 74)).toEqual(true);
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