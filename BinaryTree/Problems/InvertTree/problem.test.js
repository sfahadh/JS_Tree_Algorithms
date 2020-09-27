const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const invertTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Node 3 should be in the left subtree of node 10", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([10, null, 3])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["1"]));
});