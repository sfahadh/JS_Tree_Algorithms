const Node = require("../../BST/starter");
const inOrder = require("./problem");

test("Return an array of values - [6, 10, 15]", () => {
    const node = new Node(10);
    node.insert(6);
    node.insert(15);
    expect(inOrder(node)).toEqual([6, 10, 15]);
});

test("Return an array of value - [33]", () => {
    const node = new Node(33);
    expect(inOrder(node)).toEqual([33]);
});

test("Return an array of values - [17, 24, 31, 32, 34, 39]", () => {
    const node = new Node(24);
    node.insert(24);
    node.insert(17);
    node.insert(31);
    node.insert(34);
    node.insert(32);
    node.insert(39);
    expect(inOrder(node)).toEqual([17, 24, 31, 32, 34, 39]);
});

test("Return an empty array", () => {
    expect(inOrder(null)).toEqual([]);
});

test("Return an array of values - [0, 3, 5, 13, 18, 33, 65]", () => {
    const node = new Node(18);
    node.insert(5);
    node.insert(13);
    node.insert(3);
    node.insert(18);
    node.insert(65);
    node.insert(0);
    node.insert(3);
    node.insert(33);
    expect(inOrder(node)).toEqual([0, 3, 5, 13, 18, 33, 65]);
});