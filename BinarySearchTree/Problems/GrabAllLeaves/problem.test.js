const constructTree = require("../../Starter/ConstructTree");
const grabAllLeaves = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return an array of [6, 15] leaf nodes", () => {
	const tree = constructTree(Structures["2"]);
	expect(grabAllLeaves(tree.root)).toEqual([6, 15]);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return an array of [13] leaf nodes", () => {
	const tree = constructTree(Structures["4"]);
	expect(grabAllLeaves(tree.root)).toEqual([13]);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return an array of [3, 5, 7, 9] leaf nodes", () => {
	const tree = constructTree(Structures["6"]);
	expect(grabAllLeaves(tree.root)).toEqual([3, 5, 7, 9]);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return an array of [12, 15, 23, 36, 49, 55] leaf nodes", () => {
	const tree = constructTree(Structures["7"]);
	expect(grabAllLeaves(tree.root)).toEqual([12, 15, 23, 36, 49, 55]);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return an array of [53, 85] leaf nodes", () => {
	const tree = constructTree(Structures["8"]);
	expect(grabAllLeaves(tree.root)).toEqual([53, 85]);
});

// Test Case 13: //* Sample Input: refer to Images -> BST-structure-13.png
test("Return an array of [1, 4, 34, 89, 121, 125, 167] leaf nodes", () => {
	const tree = constructTree(Structures["13"]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 34, 89, 121, 125, 167]);
});

// Test Case 3:
test("Return an array of [17] leaf nodes", () => {
	const tree = constructTree([17]);
	expect(grabAllLeaves(tree.root)).toEqual([17]);
});

// Test Case 5:
test("Return an empty array", () => {
	expect(grabAllLeaves(null)).toEqual([]);
});


// Test Case 8: //* Sample Input: refer to Images -> BST-structure-14.png
test("Return an array of [1, 4, 34, 89, 121, 125, 167] leaf nodes", () => {
	const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 34, 89, 121, 125, 167]);
});
