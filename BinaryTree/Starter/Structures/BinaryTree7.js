const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(16);
    tree.insert(1, 16, true);
    tree.insert(5, 16, false);
    tree.insert(5, 21, true);
    tree.insert(3, 21, false);
    tree.insert(7, 5, true);
    tree.insert(16, 5, false);
    tree.insert(8, 3, false);
    tree.insert(4, 16, false);
    tree.insert(18, 16, true);
    return tree;
}

module.exports = constructTree;