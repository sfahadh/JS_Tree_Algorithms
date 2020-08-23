const constructTree = require("../../Starter/ConstructTree");
const sumRightLeaves = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all right leaves should return 15", () => {
	const tree = constructTree(Structures["2"]);
	expect(sumRightLeaves(tree.root)).toEqual(15);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The sum of all left leaves should return 0", () => {
	const tree = constructTree(Structures["3"]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all right leaves should return 14", () => {
	const tree = constructTree(Structures["6"]);
	expect(sumRightLeaves(tree.root)).toEqual(14);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all right leaves should return 21", () => {
	const tree = constructTree(Structures["7"]);
	expect(sumRightLeaves(tree.root)).toEqual(21);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all right leaves should return 90", () => {
	const tree = constructTree(Structures["8"]);
	expect(sumRightLeaves(tree.root)).toEqual(90);
});

// Test Case 14:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumRightLeaves(tree.root)).toEqual(0);
});

// Test Case 15:
test("There is no tree, should return 0", () => {
	expect(sumRightLeaves(null)).toEqual(0);
});
