const constructTree = require("../../Starter/ConstructTree");
const sameParent = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return false because 25 and 43 does not have the same parent", () => {
	const tree = constructTree(Structures["2"]);
	expect(sameParent(tree.root, 6, 43)).toEqual(false);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return false because 8 and 16 does not have the same parent", () => {
	const tree = constructTree(Structures["6"]);
	expect(sameParent(tree.root, 5, 7)).toEqual(false);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return true because 5 and 13 does have the same parent", () => {
	const tree = constructTree(Structures["7"]);
	expect(sameParent(tree.root, 5, 13)).toEqual(true);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return false because 3 and 17 does not have the same parent", () => {
	const tree = constructTree(Structures["10"]);
	expect(sameParent(tree.root, 12, 19)).toEqual(true);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("Return true because 5 and 21 does have the same parent", () => {
	const tree = constructTree(Structures["11"]);
	expect(sameParent(tree.root, 42, 50)).toEqual(true);
});

// Test Case 14:
test("Return false because there is only 1 node", () => {
	const tree = constructTree([17]);
	expect(sameParent(tree.root, 14, 32)).toEqual(false);
});

// Test Case 15:
test("Return false because there is no tree", () => {
	expect(sameParent(null)).toEqual(false);
});

