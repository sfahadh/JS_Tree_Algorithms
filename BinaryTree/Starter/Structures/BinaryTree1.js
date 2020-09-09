const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(10);
    tree.insert(3, 10, true);
    return tree;
}

module.exports = constructTree;