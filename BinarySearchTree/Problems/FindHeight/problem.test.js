const constructTree = require("../../Starter/ConstructTree");
const findHeight = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("From the root of the BST to the node, the height is 3 - Part I", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  expect(findHeight(tree.root, 2)).toEqual(3);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("From the root of the BST to the node, the height is 2", () => {
  const tree = constructTree([10, 6, 15]);
  expect(findHeight(tree.root, 6)).toEqual(2);
});

// Test Case 3:
test("From the root of the BST to the node, the height is 1", () => {
  const tree = constructTree([17]);
  expect(findHeight(tree.root, 17)).toEqual(1);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Node not found in BST, should return 0", () => {
  const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
  expect(findHeight(tree.root, 24)).toEqual(0);
});

// Test Case 5:
test("Should return 0 as there is no tree", () => {
  expect(findHeight(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-11.png
test("From the root of the BST to the node, the height is 6", () => {
  const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
  expect(findHeight(tree.root, 69)).toEqual(6);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-10.png
test("From the root of the BST to the node, the height is 3 - Part II", () => {
  const tree = constructTree([15, 12, 19, 2, 21]);
  expect(findHeight(tree.root, 21)).toEqual(3);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-12.png
test("Node is not located anywhere in the BST", () => {
  const tree = constructTree([777, 555, 888, 444, 666, 999]);
  expect(findHeight(tree.root, 555)).toEqual(3);
});
