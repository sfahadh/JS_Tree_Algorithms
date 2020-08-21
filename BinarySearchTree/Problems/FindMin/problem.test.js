const constructTree = require("../../Starter/ConstructTree");
const findMin = require("./problem");
const structures = require("../../Starter/Structures");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Lowest node value in tree is 6", () => {
	const tree = constructTree(Structures["2"]);
	expect(findMin(tree.root)).toEqual(6);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Lowest node value in tree is 3", () => {
	const tree = constructTree(Structures["6"]);
	expect(findMin(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Lowest node value in tree is 1", () => {
	const tree = constructTree(structures["7"]);
	expect(findMin(tree.root)).toEqual(1);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-9.png
test("Lowest node value in tree is 3", () => {
	const tree = constructTree(Structures["9"]);
	expect(findMin(tree.root)).toEqual(3);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Lowest node value in tree is 444", () => {
	const tree = constructTree(Structures["12"]);
	expect(findMin(tree.root)).toEqual(444);
});

// Test Case 14:
test("There is no tree, should return null", () => {
	expect(findMin(null)).toEqual(null);
});

// Test Case 15:
test("Lowest node value in tree is 5234523", () => {
	const tree = constructTree([5234523]);
	expect(findMin(tree.root)).toEqual(5234523);
});