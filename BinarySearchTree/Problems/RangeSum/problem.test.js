const constructTree = require("../../Starter/ConstructTree");
const rangeSum = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The range sum value should return 16", () => {
	const tree = constructTree(Structures["2"]);
	expect(rangeSum(tree.root, 1, 12)).toEqual(16);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The range sum value should return 18", () => {
	const tree = constructTree(Structures["6"]);
	expect(rangeSum(tree.root, 3, 6)).toEqual(18);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The range sum value should return 30", () => {
	const tree = constructTree(Structures["7"]);
	expect(rangeSum(tree.root, 5, 9)).toEqual(27);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("The range sum value should return 15", () => {
	const tree = constructTree(Structures["10"]);
	expect(rangeSum(tree.root, 15, 16)).toEqual(15);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("The range sum value should return 36", () => {
	const tree = constructTree(Structures["11"]);
	expect(rangeSum(tree.root, 0, 100)).toEqual(336);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("The range sum value should return 0 because there are no node values in range", () => {
	const tree = constructTree(Structures["12"]);
	expect(rangeSum(tree.root, 22, 45)).toEqual(0);
});

// Test Case 14:
test("The range sum value should return 0", () => {
	const tree = constructTree([17]);
	expect(rangeSum(tree.root, 8, 12)).toEqual(0);
});

// Test Case 15:
test("The range sum value should return 0", () => {
	expect(rangeSum(null, 15, 65)).toEqual(0);
});