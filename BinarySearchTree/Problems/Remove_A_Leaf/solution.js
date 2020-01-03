
const removeLeaf = (tree, leaf) => {
    if (tree === null) return tree;
    if (tree.left) {
        if (tree.left.data === leaf) {
            tree.left = null;
            return tree;
        } else {
            removeLeaf(tree.left, leaf);
        }
    }

    if (tree.right) {
        if (tree.right.data === leaf) {
            tree.right = null;
            return tree;
        } else {
            removeLeaf(tree.right, leaf);
        }
    }

    return tree;
}