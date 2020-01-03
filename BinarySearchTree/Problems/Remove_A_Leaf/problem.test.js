const Node = require("../../BST/starter");
const removeLeaf = require("./problem");

test("return tree without the 89 leaf node", () => {
    const tree = new Node(84);
    tree.insert(66);
    tree.insert(89);
    const result = {
        data: 84,
        left: { data: 66, left: null, right: null },
        right: null
      }
    expect(removeLeaf(tree, 89)).toEqual(result);
});

// test("return tree without the 1 leaf node", () => {
//     const tree = new Node(7);
//     tree.insert(5);
//     tree.insert(13);
//     tree.insert(2);
//     tree.insert(6);
//     tree.insert(9);
//     tree.insert(15);
//     tree.insert(1);
//     const result =  {
//         data: 7,
//         left: {
//           data: 5,
//           left: { data: 2, left: null, right: null },
//           right: { data: 6, left: null, right: null }
//         },
//         right: {
//           data: 13,
//           left: { data: 9, left: null, right: null },
//           right: { data: 15, left: null, right: null }
//         }
//       }
//     expect(removeLeaf(tree, 1)).toEqual(result);
// });

/*

		7                           7
	  /	  \             	      /	  \
     5     13        =>         5      13
   /  \   /  \                /   \   /   \  
  2    6 9   15              2     6 9    15
 /
1 

*/
