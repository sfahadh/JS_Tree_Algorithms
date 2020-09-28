const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const sameTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Trees are identical - Part I", () => {
    const tree = constructTree(structures["1"]);
    expect(sameTree(tree, tree)).toEqual(true);
});