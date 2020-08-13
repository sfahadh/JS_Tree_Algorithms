const constructTree = require("../../Starter/ConstructTree");
const sumRightLeaves = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all right leaves should return 21", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(sumRightLeaves(tree.root)).toEqual(21);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all right leaves should return 15", () => {
	const tree = constructTree([10, 6, 15]);
	expect(sumRightLeaves(tree.root)).toEqual(15);
});

// Test Case 3:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all right leaves should return 14", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(sumRightLeaves(tree.root)).toEqual(14);
});

// Test Case 5:
test("There is no tree, should return 0", () => {
	expect(sumRightLeaves(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all right leaves should return 90", () => {
	const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
	expect(sumRightLeaves(tree.root)).toEqual(90);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-4.png
test("The sum of all left leaves should return 0", () => {
	const tree = constructTree([62, 13]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-3.png
test("The sum of all right leaves should return 123", () => {
	const tree = constructTree([62, 123]);
	expect(sumRightLeaves(tree.root)).toEqual(123);
});