const constructTree = require("../../Starter/ConstructTree");
const inOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [17, 24, 31, 32, 34, 39]", () => {
    const tree = constructTree(Structures["1"]);
    expect(inOrder(tree.root)).toEqual([17, 24, 31, 32, 34, 39]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [6, 10, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(inOrder(tree.root)).toEqual([6, 10, 15]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [62, 123]", () => {
    const tree = constructTree(Structures["3"]);
    expect(inOrder(tree.root)).toEqual([62, 123]);
});

// Test Case 4:  //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [62, 13]", () => {
    const tree = constructTree(Structures["4"]);
    expect(inOrder(tree.root)).toEqual([13, 62]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [0, 3, 5, 13, 18, 33, 65]", () => {
    const tree = constructTree(Structures["5"]);
    expect(inOrder(tree.root)).toEqual([0, 3, 5, 13, 18, 33, 65]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [3, 4, 5, 6, 7, 8, 9]", () => {
    const tree = constructTree(Structures["6"]);
    expect(inOrder(tree.root)).toEqual([3, 4, 5, 6, 7, 8, 9]);
});

// Test Case 14:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(inOrder(tree.root)).toEqual([33]);
});
