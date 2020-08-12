const constructTree = require("../../Starter/ConstructTree");
const findMax = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Highest node value in tree is 15", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(findMax(tree.root)).toEqual(15);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Highest node value in tree is 15", () => {
	const tree = constructTree([10, 6, 15]);
	expect(findMax(tree.root)).toEqual(15);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-9.png
test("Highest node value in tree is 21", () => {
	const tree = constructTree([15, 3, 16, 21]);
	expect(findMax(tree.root)).toEqual(21);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Highest node value in tree is 9", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(findMax(tree.root)).toEqual(9);
});

// Test Case 5:
test("There is no tree, should return null", () => {
	expect(findMax(null)).toEqual(null);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-12.png
test("Highest node value in tree is 999", () => {
	const tree = constructTree([777, 555, 888, 444, 666, 999]);
	expect(findMax(tree.root)).toEqual(999);
});

// Test Case 7:
test("Highest node value in tree is 545315", () => {
	const tree = constructTree([545315]);
	expect(findMax(tree.root)).toEqual(545315);
});