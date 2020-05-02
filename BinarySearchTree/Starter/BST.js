const Node = require("../Starter/node");

function BST() {
    this.root = null;
}

BST.prototype.insert = function (data) {
    if (!this.root) return this.root = new Node(data);

    if (data < this.root.data) {
        if (this.root.left) return this.root.left.insert(data);
        else return this.root.left = new Node(data);
    }

    if (data > this.root.data) {
        if (this.root.right) return this.root.right.insert(data);
        else return this.root.right = new Node(data);
    }
}

module.exports = BST;