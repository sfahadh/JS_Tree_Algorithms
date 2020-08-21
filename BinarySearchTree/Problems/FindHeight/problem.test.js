const constructTree = require("../../Starter/ConstructTree");
const findHeight = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("From the root of the BST to the node, the height is 2", () => {
  const tree = constructTree(Structures["2"]);
  expect(findHeight(tree.root, 6)).toEqual(2);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("Node not found in BST, should return 0", () => {
  const tree = constructTree(Structures["6"]);
  expect(findHeight(tree.root, 24)).toEqual(0);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("From the root of the BST to the node, the height is 3 - Part I", () => {
  const tree = constructTree(Structures["7"]);
  expect(findHeight(tree.root, 2)).toEqual(3);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("From the root of the BST to the node, the height is 3 - Part II", () => {
  const tree = constructTree(Structures["10"]);
  expect(findHeight(tree.root, 21)).toEqual(3);
});

// Test Case 11: //* Sample Input: refer to Images -> BST-structure-11.png
test("From the root of the BST to the node, the height is 6", () => {
  const tree = constructTree(Structures["11"]);
  expect(findHeight(tree.root, 69)).toEqual(6);
});

// Test Case 12: //* Sample Input: refer to Images -> BST-structure-12.png
test("Node is not located anywhere in the BST", () => {
  const tree = constructTree(Structures["12"]);
  expect(findHeight(tree.root, 555)).toEqual(3);
});

// Test Case 14:
test("From the root of the BST to the node, the height is 1", () => {
  const tree = constructTree([17]);
  expect(findHeight(tree.root, 17)).toEqual(1);
});

// Test Case 15:
test("Should return 0 as there is no tree", () => {
  expect(findHeight(null)).toEqual(0);
});
