const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const sameTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("The only node in the 2nd input is a subtree for the 1st input", () => {
    const sub = constructTree([3]);
    expect(sameTree(constructTree(structures["1"]), sub)).toEqual(true);
});