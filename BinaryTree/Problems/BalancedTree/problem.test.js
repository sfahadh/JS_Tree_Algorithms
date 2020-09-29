const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const balanced = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Return true because there is only 2 nodes in the tree", () => {
    expect(balanced(constructTree(structures["1"]))).toEqual(true);
});