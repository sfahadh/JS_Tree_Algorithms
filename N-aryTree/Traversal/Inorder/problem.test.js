const NaryTree = require("../../Starter/N-aryTree");
const Node = require("../../Starter/Node");
const inOrder = require("./problem");

// Test Case 1:
test("Return an array of values - [13, 3, 5, 23]", () => {
    const tree = new NaryTree();
    const rootNode = new Node(5);
    tree.root = rootNode;
    rootNode.insert(13);
    rootNode.insert(3);
    rootNode.insert(23);
    expect(inOrder(tree.root)).toEqual([13, 3, 5, 23]);
});
/*

        5
    /   |   \
   13   3    23

*/