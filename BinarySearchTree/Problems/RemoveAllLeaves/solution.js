const removeAllLeaves = root => {
    if (!root) return null;
    if (root.left) {
        if (!root.left.left && !root.left.right) root.left = null;
    }
    if (root.right) {
        if (!root.right.left && !root.right.right) root.right = null;
    }
    if (root.left) this.removeAllLeaves(root.left);
    if (root.right) this.removeAllLeaves(root.right);
    return root;
}

