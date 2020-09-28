const BinaryTree = require("../../Starter/BinaryTree");
const structures = require("../../Starter/Structures");
const constructTree = require("../../Starter/constructTree");
const sameTree = require("./problem");

// Test Case 1: //* Sample Output: refer to Images -> BT-structure-1.png
test("The only node in the 2nd input is a subtree for the 1st input", () => {
    const sub = constructTree([3]);
    expect(sameTree(constructTree(structures["1"]), sub)).toEqual(true);
});

// Test Case 2: //* Sample Output: refer to Images -> BT-structure-2.png
test("The only node in the 2nd input is not a subtree for the 1st input", () => {
    const sub = constructTree([17]);
    expect(sameTree(constructTree(structures["2"]), sub)).toEqual(false);
});

// Test Case 3: //* Sample Output: refer to Images -> BT-structure-3.png
test("The left and right subtree are in opposite orders, therefore not a subtree of other tree", () => {
    const sub = constructTree([17, 11, null, null, 22]);
    expect(sameTree(constructTree(structures["3"]), sub)).toEqual(false);
});

// Test Case 4: //* Sample Output: refer to Images -> BT-structure-4.png
test("The 1st and 2nd input are the exact same tree therefore the 2nd input is a subtree of the 1st", () => {
    const tree = constructTree(structures["4"]);
    expect(sameTree(tree, tree)).toEqual(true);
});

// Test Case 5: //* Sample Output: refer to Images -> BT-structure-5.png
test("One of the values is different in the sub", () => {
    const sub = constructTree([22, 12, 11, null, null, null, 22, null, 11]);
    console.log(sub);
    expect(sameTree(constructTree(structures["5"]), sub)).toEqual(false);
});