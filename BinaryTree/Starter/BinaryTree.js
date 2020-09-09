const Node = require("./Node");

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype.insert = function (parent, data, insertLeft) {
    const newNode = new Node(data);
    if (!this.root) return this.root = newNode;
    const queue = [this.root];

    while (queue.length) {
        const node = queue.shift();

        if (node.data === parent) {
            insertLeft ? node.left = newNode : node.right = newNode;
            break;
        } else {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
}


module.exports = BinaryTree;