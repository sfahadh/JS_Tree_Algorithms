const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const symmetric = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return false because there is no right subtree, only a left subtree", () => {
    expect(symmetric(constructTree(structures["1"]))).toEqual(false);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return false because there isn't an equal number of nodes in the right subtree and left subtree", () => {
    expect(symmetric(constructTree(structures["11"]))).toEqual(false);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-16.png
test("Return false because tree is not symmetric - Part I", () => {
    expect(symmetric(constructTree(structures["16"]))).toEqual(false);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-16.png
test("Return true because tree is symmetric - Part I", () => {
    expect(symmetric(constructTree(structures["16"]))).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Return false because one of the node has a different value", () => {
    expect(symmetric(constructTree(structures["5"]))).toEqual(false);
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-18.png
test("Return true because tree is symmetric - Part II", () => {
    expect(symmetric(constructTree(structures["18"]))).toEqual(true);
});