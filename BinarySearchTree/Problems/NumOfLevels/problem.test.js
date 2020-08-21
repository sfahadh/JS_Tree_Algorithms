const constructTree = require("../../Starter/ConstructTree");
const levels = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-1.png
test("The BST structure 1 should return 4 as number of levels", () => {
  const tree = constructTree(Structures["1"]);
  expect(levels(tree.root)).toEqual(4);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("The BST structure 2 should return 2 as number of levels", () => {
  const tree = constructTree(Structures["2"]);
  expect(levels(tree.root)).toEqual(2);
});

// Test Case 3: //* Sample Input: refer to Images -> BST-structure-3.png
test("The BST structure 3 should return 2 as number of levels", () => {
  const tree = constructTree(Structures["3"]);
  expect(levels(tree.root)).toEqual(2);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-4.png
test("The BST structure 4 should return 2 as number of levels", () => {
  const tree = constructTree(Structures["4"]);
  expect(levels(tree.root)).toEqual(2);
});

// Test Case 5: //* Sample Input: refer to Images -> BST-structure-5.png
test("The BST structure 5 should return 4 as number of levels", () => {
  const tree = constructTree(Structures["5"]);
  expect(levels(tree.root)).toEqual(4);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-6.png
test("The BST structure 6 should return 3 as number of levels", () => {
  const tree = constructTree(Structures["6"]);
  expect(levels(tree.root)).toEqual(3);
});

// Test Case 7: //* Sample Input: refer to Images -> BST-structure-7.png
test("The BST structure 7 should return 5 as number of levels", () => {
  const tree = constructTree(Structures["7"]);
  expect(levels(tree.root)).toEqual(5);
});

// Test Case 14:
test("The BST should return 1 as number of levels", () => {
  const tree = constructTree([17]);
  expect(levels(tree.root)).toEqual(1);
});

// Test Case 15:
test("There is no BST, therefore there are 0 levels", () => {
  expect(levels(null)).toEqual(0);
});
