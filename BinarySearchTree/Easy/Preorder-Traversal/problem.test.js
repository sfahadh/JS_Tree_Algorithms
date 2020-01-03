const Node = require("../../BST/starter");
const preOrder = require("./problem");

test("Return an array of values - [10, 6, 15]", () => {
    const node = new Node(10);
    node.insert(6);
    node.insert(15);
    expect(preOrder(node)).toEqual([10, 6, 15]);
});

test("Return an array of value - [10]", () => {
    const node = new Node(33);
    expect(preOrder(node)).toEqual([33]);
});

test("Return an array of values - [24, 17, 31, 34, 32, 39]", () => {
    const node = new Node(24);
    node.insert(24);
    node.insert(17);
    node.insert(31);
    node.insert(34);
    node.insert(32);
    node.insert(39);
    expect(preOrder(node)).toEqual([24, 17, 31, 34, 32, 39]);
});

test("Return an empty array", () => {
    expect(preOrder(null)).toEqual([]);
});

test("Return an array of values - [18, 5, 3, 0, 13, 65, 33]", () => {
    const node = new Node(18);
    node.insert(5);
    node.insert(13);
    node.insert(3);
    node.insert(18);
    node.insert(65);
    node.insert(0);
    node.insert(3);
    node.insert(33);
    expect(preOrder(node)).toEqual([18, 5, 3, 0, 13, 65, 33]);
});