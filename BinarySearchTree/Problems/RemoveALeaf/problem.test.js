const constructTree = require("../../Starter/ConstructTree");
const removeLeaf = require("./problem");

// Test Case 1:
test("return tree without the 89 leaf node", () => {
  const inputTree = constructTree([84, 66, 89]);
  const outputTree = constructTree([84, 66]);
  expect(removeLeaf(inputTree, 89)).toEqual(outputTree.root);
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
test("Return original tree", () => {
  const tree = constructTree([24, 17, 31, 34, 32, 39]);
  expect(removeLeaf(tree, 18)).toEqual(tree);
});

/*

     24                   24
    /  \                 /  \
   17  31               17  31    
         \       =>           \     
         34                      34
        /  \                    /  \
       32  39                  32  39

*/