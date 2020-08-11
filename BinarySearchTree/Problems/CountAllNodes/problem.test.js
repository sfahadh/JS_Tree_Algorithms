const constructTree = require("../../Starter/ConstructTree");
const countNodes = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return 8 for number of nodes in BST", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(countNodes(tree.root)).toEqual(8);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return 3 for number of nodes in BST", () => {
	const tree = constructTree([10, 6, 15]);
	expect(countNodes(tree.root)).toEqual(3);
});

// Test Case 3:
test("Return 1 for number of nodes in BST", () => {
	const tree = constructTree([17]);
	expect(countNodes(tree.root)).toEqual(1);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return 7 for number of nodes in BST", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(countNodes(tree.root)).toEqual(7);
});

// Test Case 5:
test("Return 0 because there is no tree", () => {
	expect(countNodes(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return 9 for number of nodes in BST", () => {
	const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
	expect(countNodes(tree.root)).toEqual(9);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return 2 for number of nodes in BST", () => {
	const tree = constructTree([62, 13]);
	expect(countNodes(tree.root)).toEqual(2);
});