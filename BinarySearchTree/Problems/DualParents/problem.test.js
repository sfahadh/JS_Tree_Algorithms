const constructTree = require("../../Starter/ConstructTree");
const dualParent = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("There are 3 parents with a left and right child", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree([10, 6, 15]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 3:
test("There are no parents with a left and right child", () => {
	const tree = constructTree([17]);
	expect(dualParent(tree.root)).toEqual(0);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-10.png
test("There is 1 parent with a left and right child", () => {
	const tree = constructTree([15, 12, 19, 2, 21]);
	expect(dualParent(tree.root)).toEqual(1);
});

// Test Case 5:
test("Should return 0 because there is no tree", () => {
	expect(dualParent(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-11.png
test("There are 3 parents with a left and right child", () => {
	const tree = constrctTree([25, 16, 30, 5, 20, 35, 45, 42, 50, 69]);
	expect(dualParent(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-4.png
test("There are 0 parents with a left and right child", () => {
	const tree = constructTree([62, 13]);
	expect(dualParent(tree.root)).toEqual(9);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-5.png
test("There are 0 parents with a left and right child", () => {
	const tree = constructTree([18, 5, 65, 3, 13, 33, 0]);
	expect(dualParent(tree.root)).toEqual(2);
});
