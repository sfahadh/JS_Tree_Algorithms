const constructTree = require("../../Starter/ConstructTree");
const preOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const tree = constructTree(Structures["1"]);
    expect(preOrder(tree.root)).toEqual([24, 17, 31, 34, 32, 39]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(preOrder(tree.root)).toEqual([10, 6, 15]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree(Structures["3"]);
    expect(preOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [62, 13]", () => {
    const tree = constructTree(Structures["4"]);
    expect(preOrder(tree.root)).toEqual([62, 13]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [18, 5, 3, 0, 13, 65, 33]", () => {
    const tree = constructTree(Structures["5"]);
    expect(preOrder(tree.root)).toEqual([18, 5, 3, 0, 13, 65, 33]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [6, 4, 3, 5, 8, 7, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(preOrder(tree.root)).toEqual([6, 4, 3, 5, 8, 7, 9]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Return an array of values - [7, 5, 2, 1, 6, 13, 9, 15]", () => {
    const tree = constructTree(Structures["7"]);
    expect(preOrder(tree.root)).toEqual([7, 5, 2, 1, 6, 13, 9, 15]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Return an array of values - [25, 16, 4, 21, 26, 35, 45, 47, 69]", () => {
    const tree = constructTree(Structures["8"]);
    expect(preOrder(tree.root)).toEqual([25, 16, 4, 21, 26, 35, 45, 47, 69]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [15, 3, 16, 21]", () => {
    const tree = constructTree(Structures["9"]);
    expect(preOrder(tree.root)).toEqual([15, 3, 16, 21]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [15, 12, 2, 19, 21]", () => {
    const tree = constructTree(Structures["10"]);
    expect(preOrder(tree.root)).toEqual([15, 12, 2, 19, 21]);
});

// Test Case 2:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(preOrder(tree.root)).toEqual([33]);
});

// Test Case 4:
test("Return an empty array", () => {
    expect(preOrder(null)).toEqual([]);
});
