const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const symmetric = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return false because there is no right subtree, only a left subtree", () => {
    expect(symmetric(constructTree(structures["1"]))).toEqual(false);
});