const NaryTree = require("../../Starter/N-aryTree");
const ConstructRootNode = require("../../Starter/constructRootNode");
const InsertToNode = require("../../Starter/insertToNode");
const postOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [13, 3, 23, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 3, 23]);
    expect(postOrder(tree)).toEqual([13, 3, 23, 5]);
});
/*

         5
     /   |   \
   13    3    23

*/

// Test Case 2:
test("Return an array of values - [13, 23, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 23]);
    expect(postOrder(tree)).toEqual([13, 23, 5]);
});
/*

        5
      /   \
    13     23

*/

// Test Case 3:
test("Return an array of values - [23, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [23]);
    expect(postOrder(tree)).toEqual([23, 5]);
});
/*

    5
      \
       23

*/

// Test Case 4:
test("Return an array of values - [13, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13]);
    expect(postOrder(tree)).toEqual([13, 5]);
});
/*

        5
      /   
    13     

*/

// Test Case 5:
test("Return an array of values - [7, 24, 13, 3, 63, 23, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 3, 23]);
    InsertToNode(tree.children[0], [7, 24]);
    InsertToNode(tree.children[2], [63]);
    expect(postOrder(tree)).toEqual([7, 24, 13, 3, 63, 23, 5]);
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
    expect(postOrder(ConstructRootNode(5))).toEqual([5]);
});
/*
    5

*/

// Test Case 7:
test("Return an empty tree", () => {
    const tree = new NaryTree();
    expect(postOrder(tree.root)).toEqual(tree.root);
});