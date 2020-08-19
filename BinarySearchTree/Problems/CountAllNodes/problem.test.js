const constructTree = require("../../Starter/ConstructTree");
const countNodes = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return 3 for number of nodes in BST", () => {
	const tree = constructTree(Structures["2"]);
	expect(countNodes(tree.root)).toEqual(3);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return 2 for number of nodes in BST", () => {
	const tree = constructTree(Structures["4"]);
	expect(countNodes(tree.root)).toEqual(2);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return 7 for number of nodes in BST", () => {
	const tree = constructTree(Structures["6"]);
	expect(countNodes(tree.root)).toEqual(7);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return 8 for number of nodes in BST", () => {
	const tree = constructTree(Structures["7"]);
	expect(countNodes(tree.root)).toEqual(8);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return 9 for number of nodes in BST", () => {
	const tree = constructTree(Structures["8"]);
	expect(countNodes(tree.root)).toEqual(9);
});

// Test Case 3:
test("Return 1 for number of nodes in BST", () => {
	const tree = constructTree([17]);
	expect(countNodes(tree.root)).toEqual(1);
});

// Test Case 5:
test("Return 0 because there is no tree", () => {
	expect(countNodes(null)).toEqual(0);
});