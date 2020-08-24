const NaryTree = require("../../Starter/N-aryTree");
const ConstructRootNode = require("../../Starter/constructRootNode");
const postOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [13, 3, 23, 5]", () => {
    const tree = ConstructRootNode(5);
    InsertToNode(tree, [13, 3, 23]);
    expect(postOrder(tree)).toEqual([13, 3, 23, 5]);
});
