const constructTree = require("../../Starter/ConstructTree");
const sameParent = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return true because 5 and 13 does have the same parent", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(sameParent(tree.root, 5, 13)).toEqual(true);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return false because 25 and 43 does not have the same parent", () => {
	const tree = constructTree([10, 6, 15]);
	expect(sameParent(tree.root, 6, 43)).toEqual(false);
});

// Test Case 3:
test("Return false because there is only 1 node", () => {
	const tree = constructTree([17]);
	expect(sameParent(tree.root, 14, 32)).toEqual(false);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return false because 8 and 16 does not have the same parent", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(sameParent(tree.root, 5, 7)).toEqual(false);
});

// Test Case 5:
test("Return false because there is no tree", () => {
	expect(sameParent(null)).toEqual(false);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-11.png
test("Return true because 5 and 21 does have the same parent", () => {
	const tree = constructTree([25, 15, 30, 5, 20, 35, 45, 42, 50, 69]);
	expect(sameParent(tree.root, 42, 50)).toEqual(true);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return false because 3 and 17 does not have the same parent", () => {
	const tree = constructTree([15, 12, 19, 2, 21]);
	expect(sameParent(tree.root, 12, 19)).toEqual(true);
});
