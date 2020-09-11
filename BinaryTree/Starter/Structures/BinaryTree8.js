const BinaryTree = require("../BinaryTree");

const constructTree = () => {
    const tree = new BinaryTree();
    tree.insert(78);
    tree.insert(62, 78, true);
    tree.insert(90, 78, false);
    tree.insert(57, 62, true);
    tree.insert(71, 62, false);
    tree.insert(52, 57, true);
    tree.insert(71, 68, true);
    tree.insert(66, 68, true);
    tree.insert(79, 90, true);
    tree.insert(93, 90, false);
    tree.insert(83, 79, false);
    tree.insert(87, 83, false);
    tree.insert(99, 93, false);
    return tree;
}

module.exports = constructTree;