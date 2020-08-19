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

// Test Case 2:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(preOrder(tree.root)).toEqual([33]);
});

// Test Case 4:
test("Return an empty array", () => {
    expect(preOrder(null)).toEqual([]);
});
