const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(22);
    tree.insert(21, 22, false);
    tree.insert(12, 22, true);
    tree.insert(11, 12, true);
    tree.insert(11, 21, false);
    return tree;
}

module.exports = constructTree;