const constructTree = require("../../Starter/ConstructTree");
const levelOrder = require("./problem");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree([10, 6, 15]);
    expect(levelOrder(tree.root)).toEqual([10, 6, 15]);
});

// Test Case 2:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(levelOrder(tree.root)).toEqual([33]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = constructTree([24, 17, 31, 34, 32, 39]);
    expect(levelOrder(tree.root)).toEqual([24, 17, 31, 34, 32, 39]);
});

// Test Case 4:
test("Return an empty array", () => {
    expect(levelOrder(null)).toEqual([]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [18, 5, 65, 3, 13, 33, 0]", () => {
    const tree = constructTree([18, 5, 65, 3, 13, 33, 0]);
    expect(levelOrder(tree.root)).toEqual([18, 5, 65, 3, 13, 33, 0]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree([62, 123]);
    expect(levelOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [62, 13]", () => {
    const tree = constructTree([62, 13]);
    expect(levelOrder(tree.root)).toEqual([62, 13]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [6, 4, 8, 3, 5, 7, 9]", () => {
    const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
    expect(levelOrder(tree.root)).toEqual([6, 4, 8, 3, 5, 7, 9]);
});