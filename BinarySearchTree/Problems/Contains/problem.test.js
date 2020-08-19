const constructTree = require("../../Starter/ConstructTree");
const contains = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Node is deep in the tree", () => {
	const tree = constructTree(Structures["1"]);
	expect(contains(tree.root, 24)).toEqual(true);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Node is in the root of tree - Part I", () => {
	const tree = constructTree(Structures["2"]);
	expect(contains(tree.root, 15)).toEqual(true);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Node is found in the proximal right subtree from root", () => {
	const tree = constructTree(Structures["3"]);
	expect(contains(tree.root, 123)).toEqual(true);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Node is found in the proximal left subtree from root", () => {
	const tree = constructTree(Structures["4"]);
	expect(contains(tree.root, 13)).toEqual(true);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Node was not found in tree", () => {
	const tree = constructTree(Structures["6"]);
	expect(contains(tree.root, 2)).toEqual(false);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Node is in the deepest part of the tree", () => {
	const tree = constructTree(Structures["7"]);
	expect(contains(tree.root, 1)).toEqual(true);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Node is in the root of tree - Part II", () => {
	const tree = constructTree(Structures["9"]);
	expect(contains(tree.root, 15)).toEqual(true);
});

// Test Case 14:
test("No nodes in empty tree", () => {
	expect(contains(null, 10)).toEqual(false);
});
