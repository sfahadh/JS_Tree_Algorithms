function Node(data) {
    this.data = data;
    this.left = null; 
    this.right = null;
}

Node.prototype.insert = function(data) {
    if (data < this.data && this.left) return this.left.insert(data);
    if (data < this.data) return this.left = new Node(data);
    if (data > this.data && this.right) return this.right.insert(data);
    if (data > this.data) return this.right = new Node(data);
    if (data === this.data) console.log(`Cannot insert ${data} into BST`);
}

const node = new Node(10);
node.insert(15);
node.insert(6);
console.log(node)

module.exports = Node;