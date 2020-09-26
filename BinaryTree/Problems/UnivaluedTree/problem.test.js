const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const isUnivalued = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-10.png
test("Return true because all node values have the value 4", () => {
    expect(isUnivalued(constructTree(structures["10"]))).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-11.png
test("Return true because all node values have the value 12", () => {
    expect(isUnivalued(constructTree(structures["11"]))).toEqual(true);
});