const NaryTree = require("../../Starter/N-aryTree");
const ConstructRootNode = require("../../Starter/constructRootNode");
const InsertToNode = require("../../Starter/insertToNode");
const preOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [5, 13, 3, 23]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 3, 23]);
    expect(preOrder(tree)).toEqual([5, 13, 3, 23]);
});
/*

        5
    /   |   \
   13   3    23

*/

// Test Case 2:
test("Return an array of values - [5, 13, 23]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 23]);
    expect(preOrder(tree)).toEqual([5, 13, 23]);
});
/*

        5
      /   \
    13     23

*/

// Test Case 3:
test("Return an array of values - [5, 23]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [23]);
    expect(preOrder(tree)).toEqual([5, 23]);
});
/*

    5
      \
       23

*/

// Test Case 4:
test("Return an array of values - [5, 13]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13]);
    expect(preOrder(tree)).toEqual([5, 13]);
});
/*

        5
      /   
    13     

*/

// Test Case 5:
test("Return an array of values - [5, 13, 7, 24, 3, 23, 63]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 3, 23]);
    InsertToNode(tree.children[0], [7, 24]);
    InsertToNode(tree.children[2], [63]);
    expect(preOrder(tree)).toEqual([5, 13, 7, 24, 3, 23, 63]);
});
/*
            5
        /   |   \
      13    3    23
    /  |           \  
   7   24           63 
*/

// Test Case 6:
test("Return an array of values - [5]", () => {
    expect(preOrder(ConstructRootNode(5))).toEqual([5]);
});
/*
    5

*/

// Test Case 7:
test("Return an empty tree", () => {
    const tree = new NaryTree();
    expect(preOrder(tree.root)).toEqual(tree.root);
});