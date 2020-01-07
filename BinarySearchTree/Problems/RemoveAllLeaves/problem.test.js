const Node = require("../../BST/starter");
const removeAllLeaves = require("./problem");

test("Return a tree with only 1 node left after removing last leaves", () => {
    const tree = new Node(84);
    tree.insert(66);
    tree.insert(89);
    const result = { data: 84, left: null, right: null }
    expect(removeAllLeaves(tree)).toEqual(result);
});
/*

	    84                   84 
    /	   \        =>      	        
  66      89             

*/

test("Return a tree with only 4 node left after removing last leaves", () => {
    const tree = new Node(7);
    tree.insert(5);
    tree.insert(13);
    tree.insert(2);
    tree.insert(6);
    tree.insert(9);
    tree.insert(15);
    tree.insert(1);
    const result =  {
        data: 7,
        left: {
          data: 5,
          left: { data: 2, left: null, right: null },
          right: null
        },
        right: { data: 13, left: null, right: null }
      }
    expect(removeAllLeaves(tree)).toEqual(result);
});
/*

		    7                            7
	    /	  \             	         /   \
     5     13        =>          5      13
   /  \   /  \                 /          
  2    6 9   15               2      
 /
1 

*/

test("return empty tree", () => {
    expect(removeAllLeaves(null)).toEqual(null);
});

test("Return a tree with only 4 node left after removing last leaves", () => {
    const tree = new Node(24);
    tree.insert(17);
    tree.insert(31);
    tree.insert(34);
    tree.insert(32);
    tree.insert(39);
    const result = {
        data: 24,
        left: null,
        right: {
          data: 31,
          left: null,
          right: { data: 34, left: null, right: null }
        }
      }
    expect(removeAllLeaves(tree)).toEqual(result);
});
/*

     24                   24
    /  \                 /  \
   17  31               17  31    
         \       =>           \     
         34                    34
        /  \                  
       32  39             

*/