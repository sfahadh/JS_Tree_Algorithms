const constructTree = require("../../Starter/ConstructTree");
const singleParent = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 1 nodes that are single parents", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree([10, 6, 15]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 3:
test("There is only 1 node in the tree, return 0", () => {
	const tree = constructTree([17]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-10.png
test("There are 2 nodes that are single parents", () => {
	const tree = constructTree([15, 12, 19, 2, 21]);
	expect(singleParent(tree.root)).toEqual(2);
});

// Test Case 5:
test("Should return 0 because there is no tree", () => {
	expect(singleParent(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 4 nodes that are single parents", () => {
	const tree = constructTree([25, 15, 30, 5, 20, 35, 45, 42, 50, 69]);
	expect(singleParent(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-6.png
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(singleParent(tree.root)).toEqual(0);
});


// Test Case 8: //* Sample Input: refer to Images -> BST-structure-14.png
test("There are 8 nodes that are single parents", () => {
	const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
	expect(singleParent(tree.root)).toEqual(1);
});