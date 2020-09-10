const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(6);
    tree.insert(12, 6, false);
    tree.insert(12, 6, true);
    tree.insert(4, 12, true);
    tree.insert(3, 12, false);
    tree.insert(3, 12, true);
    tree.insert(4, 12, false);
    return tree;
}

module.exports = constructTree;