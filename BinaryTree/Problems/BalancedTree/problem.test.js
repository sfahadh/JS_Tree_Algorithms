const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const balanced = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return true because there is only 2 nodes in the tree", () => {
    expect(balanced(constructTree(structures["1"]))).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-15.png
test("Return true maximum height of tree is 4 and minimum height of tree is 3", () => {
    expect(balanced(constructTree(structures["15"]))).toEqual(true);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Return true because there is only 3 nodes and it has a left and right subtree", () => {
    expect(balanced(constructTree(structures["3"]))).toEqual(true);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Return true because it is a complete binary tree", () => {
    expect(balanced(constructTree(structures["4"]))).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Return true because the tree is balanced - Part I", () => {
    expect(balanced(constructTree(structures["5"]))).toEqual(true);
});