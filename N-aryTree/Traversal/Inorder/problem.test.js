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
test("Return an array of values - [51, 14]", () => {
    expect(inOrder(NaryTree1())).toEqual([51, 14]);
});

// Test Case 2: //* Sample Image: refer to Images -> Nary-structure-2.png
test("Return an array of values - [6, 96, 9]", () => {
    expect(inOrder(NaryTree2())).toEqual([6, 96, 9]);
});

// Test Case 3: //* Sample Image: refer to Images -> Nary-structure-3.png
test("Return an array of values - [1, 2, 0, 3]", () => {
    expect(inOrder(NaryTree3())).toEqual([1, 2, 0, 3]);
});

// Test Case 4: //* Sample Image: refer to Images -> Nary-structure-4.png
test("Return an array of values - [4, 3, 2, 1, 0]", () => {
    expect(inOrder(NaryTree4())).toEqual([4, 3, 2, 1, 0]);
});

// Test Case 5: //* Sample Image: refer to Images -> Nary-structure-5.png
test("Return an array of values - [43, 23, 3, 44, 24, 4, 42, 45, 25, 5]", () => {
    const results = [43, 23, 3, 44, 24, 4, 42, 45, 25, 5];
    expect(inOrder(NaryTree5())).toEqual(results);
});

// Test Case 6: //* Sample Image: refer to Images -> Nary-structure-6.png
test("Return an array of values - [31, 7, 53, 13, 12, 21, 2, 7, 6, 71, 22]", () => {
    const results = [31, 7, 53, 13, 12, 21, 2, 7, 6, 71, 22];
    expect(inOrder(NaryTree6())).toEqual(results);
});

// Test Case 7: //* Sample Image: refer to Images -> Nary-structure-7.png
test("Return an array of values - [3, 0, 12, -9, 5, 3, 1, 10, -5, -1, 8, 2]", () => {
    const results = [3, 0, 12, -9, 5, 3, 1, 10, -5, -1, 8, 2];
    expect(inOrder(NaryTree7())).toEqual(results);
});

// Test Case 8: //* Sample Image: refer to Images -> Nary-structure-8.png
test("Return an array of values - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12]", () => {
    const results = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 12];
    expect(inOrder(NaryTree8())).toEqual(results);
});

// Test Case 9: //* Sample Image: refer to Images -> Nary-structure-9.png
test("Return an array of values - [14, 19, 6, 29, 1, 43, 8, 62, 34, 21, 33, 101, 73, 66, 67, 54, 41, 87, 22, 5, 76, 17]", () => {
    const results = [14, 19, 6, 29, 1, 43, 8, 62, 34, 21, 33, 101, 73, 66, 67, 54, 41, 87, 22, 5, 76, 17];
    expect(inOrder(NaryTree9())).toEqual(results);
});

// Test Case 10: //* Sample Image: refer to Images -> Nary-structure-10.png
test("Return an array of values - [25, 40, 50, 10, 20, 30, 35, 55, 75, 51, 33, 99, 100, 66]", () => {
    const results = [25, 40, 50, 10, 20, 30, 35, 55, 75, 51, 33, 99, 100, 66];
    expect(inOrder(NaryTree10())).toEqual(results);
});