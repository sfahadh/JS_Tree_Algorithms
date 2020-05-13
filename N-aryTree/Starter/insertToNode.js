const insertToNode = (tree, nodes) => {
    for (let node of nodes) {
        tree.insert(node);
    }
}

module.exports = insertToNode;