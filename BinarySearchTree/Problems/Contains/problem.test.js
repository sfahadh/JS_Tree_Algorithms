const constructTree = require("../../Starter/ConstructTree");
const contains = require("./problem");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Node is deep in the tree", () => {
	const tree = constructTree([24, 17, 31, 34, 32, 39]);
	expect(contains(tree.root, 24)).toEqual(true);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Node is in the root of tree - Part I", () => {
	const tree = constructTree([10, 6, 15]);
	expect(contains(tree.root, 15)).toEqual(true);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-9.png
test("Node is in the root of tree - Part II", () => {
	const tree = constructTree([15, 3, 16, 21]);
	expect(contains(tree.root, 15)).toEqual(true);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-6.png
test("Node was not found in tree", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(contains(tree.root, 2)).toEqual(false);
});

// Test Case 5:
test("No nodes in empty tree", () => {
	expect(contains(null, 10)).toEqual(false);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-3.png
test("Node is found in the proximal right subtree from root", () => {
	const tree = constructTree([62, 123]);
	expect(contains(tree.root, 123)).toEqual(true);
});

// Test Case 7:
test("Node is found in the proximal left subtree from root", () => {
	const tree = constructTree([62, 13]);
	expect(contains(tree.root, 13)).toEqual(true);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-7.png
test("Node is in the deepest part of the tree", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(contains(tree.root, 1)).toEqual(true);
});