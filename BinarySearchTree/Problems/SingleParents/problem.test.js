const constructTree = require("../../Starter/ConstructTree");
const singleParent = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree(Structures["2"]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("There are 0 nodes that are single parents", () => {
	const tree = constructTree(Structures["6"]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 1 nodes that are single parents", () => {
	const tree = constructTree(Structures["7"]);
	expect(singleParent(tree.root)).toEqual(1);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("There are 2 nodes that are single parents", () => {
	const tree = constructTree(Structures["10"]);
	expect(singleParent(tree.root)).toEqual(2);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 4 nodes that are single parents", () => {
	const tree = constructTree(Structures["11"]);
	expect(singleParent(tree.root)).toEqual(3);
});

// Test Case 14:
test("There is only 1 node in the tree, return 0", () => {
	const tree = constructTree([17]);
	expect(singleParent(tree.root)).toEqual(0);
});

// Test Case 15:
test("Should return 0 because there is no tree", () => {
	expect(singleParent(null)).toEqual(0);
});