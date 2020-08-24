const NaryTree = require("../../Starter/N-aryTree");
const InsertToNode = require("../../Starter/insertToNode");
const postOrder = require("./problem");

// Test Case 1: //* Sample Image: refer to Images -> Nary-structure-1.png
test("Return an array of values - [51, 14]", () => {
    const tree = NaryTree(14);
    InsertToNode(tree, [51]);
    expect(postOrder(tree)).toEqual([51, 14]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [6, 9, 96]", () => {
    const tree = NaryTree(96);
    InsertToNode(tree, [6, 9]);
    expect(postOrder(tree)).toEqual([6, 9, 96]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [1, 2, 3, 0]", () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1, 2, 3]);
    expect(postOrder(tree)).toEqual([1, 2, 3, 0]);
});

// Test Case 4: //* Sample Image: refer to Images -> Nary-structure-4.png
test("Return an array of values - [4, 3, 2, 1]", () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1]);
    InsertToNode(tree.children[0], [2]);
    InsertToNode(tree.children[0].children[0], [3]);
    InsertToNode(tree.children[0].children[0].children[0], [4]);
    expect(postOrder(tree)).toEqual([4, 3, 2, 1]);
});
