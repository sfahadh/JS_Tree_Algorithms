const NaryTree = require("../../Starter/N-aryTree");
const InsertToNode = require("../../Starter/insertToNode");
const postOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [1, 2, 3, 0]", () => {
    const tree = NaryTree(0);
    InsertToNode(tree, [1, 2, 3]);
    expect(postOrder(tree)).toEqual([1, 2, 3, 0]);
});
