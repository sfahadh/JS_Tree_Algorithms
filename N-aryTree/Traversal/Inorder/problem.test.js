const NaryTree = require("../../Starter/N-aryTree");
const ConstructRootNode = require("../../Starter/constructRootNode");
const InsertToNode = require("../../Starter/insertToNode");
const inOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [13, 3, 5, 23]", () => {
    const tree = ConstructRootNode(5);
    const nodes = [13, 3, 23];
    InsertToNode(tree, nodes);
    expect(inOrder(tree)).toEqual([13, 3, 5, 23]);
});
/*

        5
    /   |   \
   13   3    23

*/

// Test Case 2:
test("Return an array of values - [13, 5, 23]", () => {
    const tree = ConstructRootNode(5);
    const nodes = [13, 23];
    InsertToNode(tree, nodes);
    expect(inOrder(tree)).toEqual([13, 5, 23]);
});
/*

        5
      /   \
    13     23

*/

// Test Case 3:
test("Return an array of values - [5, 23]", () => {
    const tree = ConstructRootNode(5);
    const nodes = [23];
    InsertToNode(tree, nodes);
    expect(inOrder(tree)).toEqual([5, 23]);
});
/*

    5
      \
       23

*/

// Test Case 4:
test("Return an array of values - [5, 23]", () => {
    const tree = ConstructRootNode(5);
    const nodes = [13];
    InsertToNode(tree, nodes);
    expect(inOrder(tree)).toEqual([5, 23]);
});
/*

        5
      /   
    13     

*/

// Test Case 5:
test("Return an array of values - [7, 13, 24, 3, 5, 23, 63]", () => {
    const tree = ConstructRootNode(5);
    const nodes = [13, 3, 23];
    InsertToNode(tree, nodes);
    tree.children[0].insert(7);
    tree.children[0].insert(24);
    tree.children[2].insert(63);
    expect(inOrder(tree)).toEqual([7, 13, 24, 3, 5, 23, 63]);
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
    const tree = ConstructRootNode(5);
    expect(inOrder(tree)).toEqual([5]);
});
/*
    5

*/


// Test Case 7:
test("Return an empty tree", () => {
    const tree = new NaryTree();
    expect(inOrder(tree.root)).toEqual(tree.root);
});