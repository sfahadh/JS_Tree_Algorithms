const constructTree = require("../../Starter/ConstructTree");
const avgLevel = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("The average levels of BST are [10, 10]", () => {
	const tree = constructTree(Structures["2"]);
	expect(avgLevel(tree.root)).toEqual([10, 10]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("The average levels of BST are [62, 123]", () => {
	const tree = constructTree(Structures["3"]);
	expect(avgLevel(tree.root)).toEqual([62, 123]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("The average levels of BST are [62, 13]", () => {
	const tree = constructTree(Structures["4"]);
	expect(avgLevel(tree.root)).toEqual([62, 13]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("The average levels of BST are [6, 6, 6]", () => {
	const tree = constructTree(Structures["6"]);
	expect(avgLevel(tree.root)).toEqual([6, 6, 6]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("The average levels of BST are [7, 9, 8, 1]", () => {
	const tree = constructTree(Structures["7"]);
	expect(avgLevel(tree.root)).toEqual([7, 9, 8, 1]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("The average levels of BST are [25, 21, 20, 45, 47, 69]", () => {
	const tree = constructTree(Structures["8"]);
	expect(avgLevel(tree.root)).toEqual([25, 21, 20, 45, 47, 69]);
});

// Test Case 3:
test("The average levels of BST are [17]", () => {
	const tree = constructTree([17]);
	expect(avgLevel(tree.root)).toEqual([17]);
});

// Test Case 5:
test("The average levels of BST are []", () => {
	expect(avgLevel(null)).toEqual([]);
});
