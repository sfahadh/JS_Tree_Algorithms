const constructTree = require("../../Starter/ConstructTree");
const avgLevel = require("./problem");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-7.png
test("The average levels of BST are [7, 9, 8, 1]", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(avgLevel(tree.root)).toEqual([7, 9, 8, 1]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("The average levels of BST are [10, 10]", () => {
	const tree = constructTree([10, 6, 15]);
	expect(avgLevel(tree.root)).toEqual([10, 10]);
});


// Test Case 3:
test("The average levels of BST are [17]", () => {
	const tree = constructTree([17]);
	expect(avgLevel(tree.root)).toEqual([17]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-6.png
test("The average levels of BST are [6, 6, 6]", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(avgLevel(tree.root)).toEqual([6, 6, 6]);
});

// Test Case 5:
test("The average levels of BST are []", () => {
	expect(avgLevel(null)).toEqual([]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-8.png
test("The average levels of BST are [25, 21, 20, 45, 47, 69]", () => {
	const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
	expect(avgLevel(tree.root)).toEqual([25, 21, 20, 45, 47, 69]);
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

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-3.png
test("The average levels of BST are [62, 123]", () => {
	const tree = constructTree([62, 123]);
	expect(avgLevel(tree.root)).toEqual([62, 123]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-4.png
test("The average levels of BST are [62, 13]", () => {
	const tree = constructTree([62, 13]);
	expect(avgLevel(tree.root)).toEqual([62, 13]);
});