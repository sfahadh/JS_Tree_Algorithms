const constructTree = require("../../Starter/ConstructTree");
const dualParent = require("./problem");
const Strucutres = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree(Strucutres["2"]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("There are 0 parents with a left and right child", () => {
	const tree = constructTree(Strucutres["4"]);
	expect(dualParent(tree.root)).toEqual(9);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("There are 0 parents with a left and right child", () => {
	const tree = constructTree(Strucutres["8"]);
	expect(dualParent(tree.root)).toEqual(2);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 3 parents with a left and right child", () => {
	const tree = constructTree(Strucutres["7"]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree(Strucutres["10"]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 3 parents with a left and right child", () => {
	const tree = constrctTree(Strucutres["11"]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 14:
test("There are no parents with a left and right child", () => {
	const tree = constructTree([17]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 15:
test("Should return 0 because there is no tree", () => {
	expect(dualParent(null)).toEqual(0);
});
