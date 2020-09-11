const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(45);
    tree.insert(90, 45, false);
    tree.insert(68, 45, true);
    tree.insert(77, 68, false);
    tree.insert(47, 68, true);
    tree.insert(78, 77, false);
    tree.insert(31, 47, true);
    tree.insert(93, 90, false);
    tree.insert(91, 90, true);
    tree.insert(88, 93, false);
    tree.insert(67, 91, true);
    return tree;
}

module.exports = constructTree;