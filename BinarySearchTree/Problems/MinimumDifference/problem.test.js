const constructTree = require("../../Starter/ConstructTree");
const minimumDifference = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The minimum difference in the tree should return 4", () => {
	const tree = constructTree(Structures["2"]);
	expect(minimumDifference(tree.root)).toEqual(4);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The minimum difference in the tree should return 61", () => {
	const tree = constructTree(Structures["3"]);
	expect(minimumDifference(tree.root)).toEqual(61);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree(Structures["6"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree(Structures["7"]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The minimum difference in the tree should return 5", () => {
	const tree = constructTree(Structures["8"]);
	expect(minimumDifference(tree.root)).toEqual(5);
});

// Test Case 14:
test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
	const tree = constructTree([17]);
	expect(minimumDifference(tree.root)).toEqual(0);
});

// Test Case 15:
test("The minimum difference should return 0 because there's no tree", () => {
	expect(minimumDifference(null)).toEqual(0);
});