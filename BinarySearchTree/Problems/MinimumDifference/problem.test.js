const constructTree = require("../../Starter/ConstructTree");
const minimumDifference = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The minimum difference in the tree should return 4", () => {
	const tree = constructTree([10, 6, 15]);
	expect(minimumDifference(tree.root)).toEqual(4);
});

// Test Case 3:
test("The minimum difference in the tree should return 0 because there's only 1 node", () => {
	const tree = constructTree([17]);
	expect(minimumDifference(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("The minimum difference in the tree should return 1", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(minimumDifference(tree.root)).toEqual(1);
});

// Test Case 5:
test("The minimum difference should return 0 because there's no tree", () => {
	expect(minimumDifference(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("The minimum difference in the tree should return 5", () => {
	const tree = constructTree([25, 15, 30, 5, 20, 35, 45, 50, 69]);
	expect(minimumDifference(tree.root)).toEqual(5);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-3.png
test("The minimum difference in the tree should return 61", () => {
	const tree = constructTree([62, 123]);
	expect(minimumDifference(tree.root)).toEqual(61);
});