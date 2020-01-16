const findHeight = (root, node, height = 0) => {
    if (!root) return 0
    if (root.data === node) return height;
    return findHeight(root.left, node, height + 1) || findHeight(root.right, node, height + 1)
}