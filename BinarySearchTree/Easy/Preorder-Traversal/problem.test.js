const Node = require("../../BST/starter");
const preOrder = require("./problem");

test("Return an array of tree nodes in pre-order traversal - [10, 6, 15]", () => {
    const node = new Node(10);
    node.insert(6);
    node.insert(15);
    expect(preOrder(node)).toEqual([10, 6, 15]);
});