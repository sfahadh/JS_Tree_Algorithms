const BST = require("../../Starter/BST");
const removeLeaf = require("./problem");

const constructTree = nodes => {
  const tree = new BST();
  for (let node of nodes) {
    tree.insert(node);
  }
  return tree;
}

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
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  const result = {
    data: 7,
    left: {
      data: 5,
      left: {
        data: 2,
        left: null,
        right: null
      },
      right: {
        data: 6,
        left: null,
        right: null
      }
    },
    right: {
      data: 13,
      left: {
        data: 9,
        left: null,
        right: null
      },
      right: {
        data: 15,
        left: null,
        right: null
      }
    }
  }
  expect(removeLeaf(tree, 1)).toEqual(result);
});

/*

		    7                           7
	    /	  \             	        /	  \
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
  const tree = new BST();
  tree.insert(24);
  tree.insert(17);
  tree.insert(31);
  tree.insert(34);
  tree.insert(32);
  tree.insert(39);
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