const inOrder = require("./problem");
const NaryTree1 = require("../../Starter/Structures/N-aryTree1");
const NaryTree2 = require("../../Starter/Structures/N-aryTree2");
const NaryTree3 = require("../../Starter/Structures/N-aryTree3");
const NaryTree4 = require("../../Starter/Structures/N-aryTree4");
const NaryTree5 = require("../../Starter/Structures/N-aryTree5");
const NaryTree6 = require("../../Starter/Structures/N-aryTree6");
const NaryTree7 = require("../../Starter/Structures/N-aryTree7");
const NaryTree8 = require("../../Starter/Structures/N-aryTree8");
const NaryTree9 = require("../../Starter/Structures/N-aryTree9");
const NaryTree10 = require("../../Starter/Structures/N-aryTree10");

// Test Case 1: //* Sample Image: refer to Images -> Nary-structure-1.png
test("Return an array of values - [14, 15]", () => {
    expect(inOrder(NaryTree1())).toEqual([14, 15]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [6, 96, 9]", () => {
    expect(inOrder(NaryTree2())).toEqual([6, 96, 9]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [1, 2, 0, 3]", () => {
    expect(inOrder(NaryTree3())).toEqual([1, 2, 0, 3]);
});