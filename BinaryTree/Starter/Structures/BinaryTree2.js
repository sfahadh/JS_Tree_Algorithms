const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(14);
    tree.insert(18, 14, false);
    return tree;
}

module.exports = constructTree;