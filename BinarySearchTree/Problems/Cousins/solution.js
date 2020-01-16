const cousins = (root, n1, n2) => {
    if (!root || !root.left && !root.right) return false;
    return !sameParent(root, n1, n2) && findHeight(root, n1) === findHeight(root, n2);
}

const findHeight = (root, node, height = 0) => {
    if (!root) return 0
    if (root.data === node) return height;
    return findHeight(root.left, node, height + 1) || 
        findHeight(root.right, node, height + 1)
}

const sameParent = (root, n1, n2) => {
    if (!root) return false;
    if (root.left && root.right) {
        if (root.left.data === n1 && root.right.data === n2 ||
        root.left.data === n2 && root.right.data === n1) return true;
    }
    return sameParent(root.left, n1, n2) || sameParent(root.right, n1, n2);
}
