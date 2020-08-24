const NaryTree = require("../../Starter/N-aryTree");
const InsertToNode = require("../../Starter/insertToNode");
const postOrder = require("./problem");
const NaryTree1 = require("../../Starter/Structures/N-aryTree1");

// Test Case 1: //* Sample Image: refer to Images -> Nary-structure-1.png
test("Return an array of values - [51, 14]", () => {
    expect(postOrder(NaryTree1())).toEqual([51, 14]);
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
test("Return an array of values - [4, 3, 2, 1, 0]", () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1]);
    InsertToNode(tree.children[0], [2]);
    InsertToNode(tree.children[0].children[0], [3]);
    InsertToNode(tree.children[0].children[0].children[0], [4]);
    expect(postOrder(tree)).toEqual([4, 3, 2, 1, 0]);
});

// Test Case 5: //* Sample Image: refer to Images -> Nary-structure-5.png
test("Return an array of values - [43, 23, 3, 44, 24, 4, 45, 25, 5, 42]", () => {
    const tree = NaryTree(42);
    InsertToNode(tree, [3, 4, 5]);

    InsertToNode(tree.children[0], [23]);
    InsertToNode(tree.children[0].children[0], [43]);

    InsertToNode(tree.children[1], [24]);
    InsertToNode(tree.children[1].children[0], [44]);

    InsertToNode(tree.children[2], [25]);
    InsertToNode(tree.children[2].children[0], [45]);

    const results = [43, 23, 3, 44, 24, 4, 45, 25, 5, 42];
    expect(postOrder(tree)).toEqual(results);
});

// Test Case 6: //* Sample Image: refer to Images -> Nary-structure-6.png
test("Return an array of values - [31, 53, 7, 12, 13, 6, 22, 2, 71, 7, 21]", () => {
    const tree = NaryTree(21);
    InsertToNode(tree, [13, 7]);

    InsertToNode(tree.children[0], [7, 12]);
    InsertToNode(tree.children[0].children[0], [31, 53]);

    InsertToNode(tree.children[1], [2, 71]);
    InsertToNode(tree.children[1].children[1], [6, 22]);

    const results = [31, 53, 7, 12, 13, 6, 22, 2, 71, 7, 21];
    expect(postOrder(tree)).toEqual(results);
});
