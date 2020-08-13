const constructTree = require("../../Starter/ConstructTree");
const levels = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("The BST should return 4 as number of levels", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
  expect(levels(tree.root)).toEqual(4);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The BST should return 2 as number of levels", () => {
  const tree = constructTree([10, 6, 15]);
  expect(levels(tree.root)).toEqual(2);
});

// Test Case 3:
test("The BST should return 1 as number of levels", () => {
  const tree = constructTree([17]);
  expect(levels(tree.root)).toEqual(1);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("The BST should return 3 as number of levels", () => {
  const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
  expect(levels(tree.root)).toEqual(3);
});

// Test Case 5:
test("The BST should return 0 as number of levels", () => {
  expect(levels(null)).toEqual(0);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-2.png
test("The BST should return 6 as number of levels", () => {
  const tree = constructTree([25, 16, 26, 5, 21, 35, 45, 47, 69]);
  expect(levels(tree.root)).toEqual(6);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-14.png
test("The BST should return 5 as number of levels", () => {
  const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
  expect(levels(tree.root)).toEqual(5);
});