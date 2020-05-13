const insertToNode = (tree, nodes) => {
    for (let node of nodes) {
        tree.insert(node);
    }
    return tree;
}

module.exports = insertToNode;