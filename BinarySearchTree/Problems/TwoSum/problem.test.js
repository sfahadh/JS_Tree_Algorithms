const constructTree = require("../../Starter/ConstructTree");
const twoSum = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return true because there are multiple 2 nodes that can be added to 15", () => {
  const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 0]);
  expect(twoSum(tree.root, 15)).toEqual(true);
});

// Test Case 2:
test("Return false because there are no nodes that adds up to 12", () => {
  const tree = constructTree([10, 6, 15]);
  expect(twoSum(tree.root, 12)).toEqual(false);
});

// Test Case 3:
test("Return false there is only 1 node in the tree", () => {
  const tree = constructTree([17]);
  expect(twoSum(tree.root, 17)).toEqual(false);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return true because there are 2 nodes that adds up to 18", () => {
  const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
  expect(twoSum(tree.root, 10)).toEqual(true);
});

// Test Case 5:
test("Return false because there is no tree", () => {
  expect(twoSum(null, 10)).toEqual(false);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return true because there are 2 nodes that adds up to 73", () => {
  const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
  expect(twoSum(tree.root, 73)).toEqual(true);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return true because there are 2 nodes that adds up to 75", () => {
  const tree = constructTree([62, 13]);
  expect(twoSum(tree.root, 75)).toEqual(true);
});

// Test Case 8: //* Sample Input: refer to Images -> BST-structure-3.png
test("Return true because there are 2 nodes that adds up to 185", () => {
  const tree = constructTree([62, 123]);
  expect(twoSum(tree.root, 185)).toEqual(true);
});

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-12.png
test("Return false because there are no nodes that adds up to 125312341234", () => {
  const tree = constructTree([777, 555, 888, 444, 666, 999]);
  expect(twoSum(tree.root, 125312341234)).toEqual(false);
});

// Test Case 10: //* Sample Input: refer to Images -> BST-structure-10.png
test("Return false because there are no nodes that adds up to 11", () => {
  const tree = constructTree([15, 12, 19, 2, 21]);
  expect(twoSum(tree.root, 11)).toEqual(false);
});
