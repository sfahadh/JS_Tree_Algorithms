const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(17);
    tree.insert(11, 17, false);
    tree.insert(22, 17, true);
    return tree;
}

module.exports = constructTree;