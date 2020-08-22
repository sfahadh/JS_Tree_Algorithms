const constructTree = require("../../Starter/ConstructTree");
const sumLeftLeaves = require("./problem");
const Structure = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all left leaves should return 6", () => {
	const tree = constructTree(Structure["2"]);
	expect(sumLeftLeaves(tree.root)).toEqual(6);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The sum of all left leaves should return 0", () => {
	const tree = constructTree(Structure["3"]);
	expect(sumLeftLeaves(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The sum of all left leaves should return 13", () => {
	const tree = constructTree(Structure["4"]);
	expect(sumLeftLeaves(tree.root)).toEqual(13);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all left leaves should return 10", () => {
	const tree = constructTree(Structure["7"]);
	expect(sumLeftLeaves(tree.root)).toEqual(10);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all left leaves should return 4", () => {
	const tree = constructTree(Structure["8"]);
	expect(sumLeftLeaves(tree.root)).toEqual(4);
});

// Test Case 14:
test("There is only 1 node, should return 0", () => {
	const tree = constructTree([17]);
	expect(sumLeftLeaves(tree.root)).toEqual(0);
});

// Test Case 15:
test("There is no tree, should return 0", () => {
	expect(sumLeftLeaves(null)).toEqual(0);
});