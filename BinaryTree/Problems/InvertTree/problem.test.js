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

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("Node 18 should be in the right subtree of node 14", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([14, 18])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["2"]));
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Nodes 11 and 22 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([17, 11, null, null, 22])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["3"]));
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Invert of tree is same as original tree", () => {
    const tree = constructTree(structures["4"])
    expect(invertTree(tree)).toEqual(tree);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Nodes 12 and 21 should switch", () => {
    const tree = new BinaryTree();
    tree.root = constructTree([22, 21, 11, null, null, null, 12, null, 11])
    expect(invertTree(tree.root)).toEqual(constructTree(structures["5"]));
});
