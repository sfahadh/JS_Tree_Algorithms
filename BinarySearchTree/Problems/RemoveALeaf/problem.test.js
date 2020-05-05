const constructTree = require("../../Starter/ConstructTree");
const BST = require("../../Starter/BST");
const removeLeaf = require("./problem");

// Test Case 1:
test("return tree without the 89 leaf node", () => {
  const inputTree = constructTree([84, 66, 89]);
  const outputTree = constructTree([84, 66]);
  expect(removeLeaf(inputTree, 89)).toEqual(outputTree);
});

/*

	    84                        84 
	  /	   \             	      /	  
  66      89       =>      66

*/

// Test Case 2:
test("return tree without the 1 leaf node", () => {
  const inputTree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  const outputTree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  expect(removeLeaf(inputTree, 1)).toEqual(outputTree);
});

/*

		    7                            7
	    /	  \             	        /	   \
     5     13        =>          5      13
   /  \   /  \                 /   \   /  \  
  2    6 9   15               2     6 9    15
 /
1 

*/

// Test Case 3:
test("return empty tree", () => {
  expect(removeLeaf(null, 5)).toEqual(null);
});

// Test Case 4:
test("Return original tree - Part I", () => {
  const tree = constructTree([24, 17, 31, 34, 32, 39]);
  expect(removeLeaf(tree, 18)).toEqual(tree);
});

/*

     24                   24
    /  \                 /  \
   17  31               17  31    
         \       =>           \     
         34                    34
        /  \                  /  \
       32  39                32  39

*/

// Test Case 5:
test("Return the tree without the 17 leaf node", () => {
  const inputTree = constructTree([24, 17, 31, 34, 32, 39]);
  const outputTree = constructTree([24, 31, 34, 32, 39]);
  expect(removeLeaf(inputTree, 17)).toEqual(outputTree);
});

/*

     24                   24
    /  \                    \
   17  31                    31    
         \       =>            \     
         34                     34
        /  \                   /  \
       32  39                 32  39

*/

// Test Case 6:
test("return tree without the 1234 leaf node", () => {
  const inputTree = constructTree([1234]);
  expect(removeLeaf(inputTree, 1234)).toEqual(new BST());
});

/*

	1234    =>        

*/

// Test Case 7:
test("Return original tree - Part II", () => {
  const tree = constructTree([54]);
  expect(removeLeaf(tree, 53)).toEqual(tree);
});

/*

	54    =>    54       

*/

// Test Case 8:
test("return original tree because 7 is NOT a leaf node", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15]);
  expect(removeLeaf(tree, 7)).toEqual(tree);
});

/*

		    7                            7
	    /	  \             	        /	   \
     5     13        =>          5      13
   /  \   /  \                 /   \   /  \  
  2    6 9   15               2     6 9    15

*/

// Test Case 9:
test("return original tree because 66 is NOT a leaf node", () => {
  const tree = constructTree([84, 66, 89, 77, 99]);
  expect(removeLeaf(tree, 66)).toEqual(tree);
});

/*

	    84                       84 
	  /	   \             	     /	  \
  66      89       =>      66      89
    \       \                \       \
    77       99              77       99

*/