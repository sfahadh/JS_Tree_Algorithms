const constructTree = require("../../Starter/ConstructTree");
const postOrder = require("./problem");
const Structures = require("../../Starter/Structures");

// Test Case 1: //* Sample Image: refer to Images -> BST-structure-1.png
test("Return an array of values - [17, 32, 39, 34, 31, 24]", () => {
    const tree = constructTree(Structures["1"]);
    expect(postOrder(tree.root)).toEqual([17, 32, 39, 34, 31, 24]);
});

// Test Case 2: //* Sample Image: refer to Images -> BST-structure-2.png
test("Return an array of values - [10, 6, 15]", () => {
    const tree = constructTree(Structures["2"]);
    expect(postOrder(tree.root)).toEqual([6, 15, 10]);
});

// Test Case 3: //* Sample Image: refer to Images -> BST-structure-3.png
test("Return an array of values - [123, 62]", () => {
    const tree = constructTree(Structures["3"]);
    expect(postOrder(tree.root)).toEqual([123, 62]);
});

// Test Case 4: //* Sample Image: refer to Images -> BST-structure-4.png
test("Return an array of values - [13, 62]", () => {
    const tree = constructTree(Structures["4"]);
    expect(postOrder(tree.root)).toEqual([13, 62]);
});

// Test Case 5: //* Sample Image: refer to Images -> BST-structure-5.png
test("Return an array of values - [0, 3, 13, 5, 33, 65, 18]", () => {
    const tree = constructTree(Structures["5"]);
    expect(postOrder(tree.root)).toEqual([0, 3, 13, 5, 33, 65, 18]);
});

// Test Case 6: //* Sample Image: refer to Images -> BST-structure-6.png
test("Return an array of values - [3, 5, 4, 7, 9, 8, 6]", () => {
    const tree = constructTree(Structures["6"]);
    expect(postOrder(tree.root)).toEqual([3, 5, 4, 7, 9, 8, 6]);
});

// Test Case 7: //* Sample Image: refer to Images -> BST-structure-7.png
test("Return an array of values - [1, 2, 6, 5, 9, 15, 13, 7]", () => {
    const tree = constructTree(Structures["7"]);
    expect(postOrder(tree.root)).toEqual([1, 2, 6, 5, 9, 15, 13, 7]);
});

// Test Case 8: //* Sample Image: refer to Images -> BST-structure-8.png
test("Return an array of values - [4, 21, 16, 69, 47, 45, 35, 26, 25]", () => {
    const tree = constructTree(Structures["8"]);
    expect(postOrder(tree.root)).toEqual([4, 21, 16, 69, 47, 45, 35, 26, 25]);
});

// Test Case 9: //* Sample Image: refer to Images -> BST-structure-9.png
test("Return an array of values - [3, 21, 16, 15]", () => {
    const tree = constructTree(Structures["9"]);
    expect(postOrder(tree.root)).toEqual([3, 21, 16, 15]);
});

// Test Case 10: //* Sample Image: refer to Images -> BST-structure-10.png
test("Return an array of values - [2, 12, 21, 19, 15]", () => {
    const tree = constructTree(Structures["10"]);
    expect(postOrder(tree.root)).toEqual([2, 12, 21, 19, 15]);
});

// Test Case 14:
test("Return an array of value - [33]", () => {
    const tree = constructTree([33]);
    expect(postOrder(tree.root)).toEqual([33]);
});

// Test Case 15:
test("Return an empty array", () => {
    expect(postOrder(null)).toEqual([]);
});
