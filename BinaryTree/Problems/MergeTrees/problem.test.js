const BinaryTree = require("../../Starter/BinaryTree");
const Node = require("../../Starter/Node");
const mergeTrees = require("./mergeTrees");
const BinaryTree4 = require("../../Starter/Structures/BinaryTree4");

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("Merge two tree to form Binary Structure 4", () => {

    expect(mergeTrees()).toEqual(BinaryTree4);
});