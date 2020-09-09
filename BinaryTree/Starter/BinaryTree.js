const Node = require("./Node");

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function (data, parent, insertLeft) {
    const newNode = new Node(data);
    if (!this.root) return this.root = newNode;
    const queue = [this.root];

    while (queue.length) {
        const node = queue.shift();

        if (node.data !== parent || node.left && node.right) {
            queue.push(node.left);
            queue.push(node.right);
        } else {
            insertLeft ? node.left = newNode : node.right = newNode;
            break;
        }
    }
}

module.exports = BinaryTree;