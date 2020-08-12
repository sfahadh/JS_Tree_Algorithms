const constructTree = require("../../Starter/ConstructTree");
const findMin = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Lowest node value in tree is 1", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(findMin(tree.root)).toEqual(1);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Lowest node value in tree is 6", () => {
	const tree = constructTree([10, 6, 15]);
	expect(findMin(tree.root)).toEqual(6);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-9.png
test("Lowest node value in tree is 3", () => {
	const tree = constructTree([15, 3, 16, 21]);
	expect(findMin(tree.root)).toEqual(3);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Lowest node value in tree is 3", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(findMin(tree.root)).toEqual(3);
});

// Test Case 5:
test("There is no tree, should return null", () => {
	expect(findMin(null)).toEqual(null);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-12.png
test("Lowest node value in tree is 444", () => {
	const tree = constructTree([777, 555, 888, 444, 666, 999]);
	expect(findMin(tree.root)).toEqual(444);
});

// Test Case 7:
test("Lowest node value in tree is 5234523", () => {
	const tree = constructTree([5234523]);
	expect(findMin(tree.root)).toEqual(5234523);
});