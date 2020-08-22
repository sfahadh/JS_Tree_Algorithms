const constructTree = require("../../Starter/ConstructTree");
const sum = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all nodes should return 31", () => {
  const tree = constructTree(Structures["2"]);
  expect(sum(tree.root)).toEqual(31);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The sum of all nodes should return 75", () => {
  const tree = constructTree(Structures["4"]);
  expect(sum(tree.root)).toEqual(75);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all nodes should return 42", () => {
  const tree = constructTree(Structures["6"]);
  expect(sum(tree.root)).toEqual(42);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all nodes should return 58", () => {
  const tree = constructTree(Structures["7"]);
  expect(sum(tree.root)).toEqual(58);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all nodes should return 290", () => {
  const tree = constructTree(Structures["8"]);
  expect(sum(tree.root)).toEqual(290);
});

// Test Case 14:
test("The sum of all nodes should return 17", () => {
  const tree = constructTree([17]);
  expect(sum(tree.root)).toEqual(17);
});

// Test Case 15:
test("The sum of all nodes should return 0", () => {
  expect(sum(null)).toEqual(0);
});
