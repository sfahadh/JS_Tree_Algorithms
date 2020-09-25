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

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("Merge two tree to form Binary Structure 4", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([3]);
    tree2.root = constructTree([11, null, 18]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["2"]));
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Merge two tree to form Binary Structure 4", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([17, 22, null, null, 11]);
    tree2.root = constructTree([0, 0, null, null, 0]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["3"]));
});