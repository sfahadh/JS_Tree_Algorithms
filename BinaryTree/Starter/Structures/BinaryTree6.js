const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(90);
    tree.insert(80, 90, false);
    tree.insert(70, 80, false);
    tree.insert(60, 70, false);
    tree.insert(50, 60, false);
    return tree;
}

module.exports = constructTree;