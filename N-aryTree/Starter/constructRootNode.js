const NaryTree = require("./N-aryTree");
const Node = require("./Node");

const constructRootNode = data => {
    const tree = new NaryTree();
    const rootNode = new Node(data);
    tree.root = rootNode;
    return tree.root;
}

module.exports = constructRootNode;