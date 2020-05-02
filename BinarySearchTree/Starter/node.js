function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.insert = function (data) {
    if (data < this.data && this.left) return this.left.insert(data);
    if (data < this.data) return this.left = new Node(data);
    if (data > this.data && this.right) return this.right.insert(data);
    if (data > this.data) return this.right = new Node(data);
    if (data === this.data) console.log(`Cannot insert ${data} into BST`);
}

module.exports = Node;