const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const mergeTrees = require("./mergeTrees");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Merge two tree to form Binary Structure 4", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([9, 2]);
    tree2.root = constructTree([1, 1]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["1"]));
});