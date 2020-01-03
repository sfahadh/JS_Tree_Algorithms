const contains = (tree, node) => {
    if (!tree) return false;
    if (node === tree.data) return true;
    if (node < tree.data) return contains(tree.left, node);
    if (node > tree.data) return contains(tree.right, node);
    return false;
}