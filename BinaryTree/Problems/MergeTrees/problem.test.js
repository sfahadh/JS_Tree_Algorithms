const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const mergeTrees = require("./mergeTrees");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("Merge two tree to form Binary Structure 1", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([9, 2]);
    tree2.root = constructTree([1, 1]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["1"]));
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("Merge two tree to form Binary Structure 2", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([3]);
    tree2.root = constructTree([11, null, 18]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["2"]));
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("Merge two tree to form Binary Structure 3", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([17, 22, null, null, 11]);
    tree2.root = constructTree([0, 0, null, null, 0]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["3"]));
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Merge two tree to form Binary Structure 4", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([3, 6, 4, null, null, null, 6, null, 4]);
    tree2.root = constructTree([3, 6, null, 3, null, null, 6, 3]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["4"]));
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("Merge two tree to form Binary Structure 5", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([20, 12, 11]);
    tree2.root = constructTree([2, null, 21, null, 11]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["5"]));
});

// Test Case 6: //* Sample Output: refer to Images -> BT-structure-6.png
test("Merge two tree to form Binary Structure 6", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([]);
    tree2.root = constructTree([90, null, 80, null, 70, null, 60, null, 50]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["6"]));
});

// Test Case 7: //* Sample Output: refer to Images -> BT-structure-7.png
test("Merge two tree to form Binary Structure 7", () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    tree1.root = constructTree([6, 0, null, null, 9, 4, 3, null, null, null, 2, null, 4]);
    tree2.root = constructTree([10, 1, null, null, 12, 1, 4, null, null, 16, 18, null, null, 4, null, null, 1, null, 4]);
    expect(mergeTrees(tree1.root, tree2.root)).toEqual(constructTree(structures["7"]));
});

