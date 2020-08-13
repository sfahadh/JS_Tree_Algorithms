const constructTree = require("../../Starter/ConstructTree");
const sum = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("The sum of all nodes should return 58", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  expect(sum(tree.root)).toEqual(58);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The sum of all nodes should return 31", () => {
  const tree = constructTree([10, 6, 15]);
  expect(sum(tree.root)).toEqual(31);
});

// Test Case 3:
test("The sum of all nodes should return 17", () => {
  const tree = constructTree([17]);
  expect(sum(tree.root)).toEqual(17);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("The sum of all nodes should return 42", () => {
  const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
  expect(sum(tree.root)).toEqual(42);
});

// Test Case 5:
test("The sum of all nodes should return 0", () => {
  expect(sum(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("The sum of all nodes should return 290", () => {
  const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
  expect(sum(tree.root)).toEqual(290);
});

// Test Case 7:
test("The sum of all nodes should return 75", () => {
  const tree = constructTree([62, 13]);
  expect(sum(tree.root)).toEqual(75);
});