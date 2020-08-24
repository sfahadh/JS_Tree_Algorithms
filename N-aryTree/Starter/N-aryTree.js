const Node = require("./Node");

function NaryTree(data) {
    this.root = !data ? null : new Node(data);
}

module.exports = NaryTree;