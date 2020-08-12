const constructTree = require("../../Starter/ConstructTree");
const grabAllLeaves = require("./problem");

// Test Case 1: //* Sample Input: refer to Images -> BST-structure-7.png
test("Return an array of [1, 6, 9, 15] leaf nodes", () => {
	const tree = constructTree([7, 5, 13, 2, 6, 9, 15, 1]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 6, 9, 15]);
});

// Test Case 2: //* Sample Input: refer to Images -> BST-structure-2.png
test("Return an array of [6, 15] leaf nodes", () => {
	const tree = constructTree([10, 6, 16]);
	expect(grabAllLeaves(tree.root)).toEqual([6, 15]);
});

// Test Case 3:
test("Return an array of [17] leaf nodes", () => {
	const tree = constructTree([17]);
	expect(grabAllLeaves(tree.root)).toEqual([17]);
});

// Test Case 4: //* Sample Input: refer to Images -> BST-structure-6.png
test("Return an array of [3, 5, 7, 9] leaf nodes", () => {
	const tree = constructTree([6, 4, 8, 3, 5, 7, 9]);
	expect(grabAllLeaves(tree.root)).toEqual([3, 5, 7, 9]);
});

// Test Case 5:
test("Return an empty array", () => {
	expect(grabAllLeaves(null)).toEqual([]);
});

// Test Case 6: //* Sample Input: refer to Images -> BST-structure-8.png
test("Return an array of [4, 21, 69] leaf nodes", () => {
	const tree = constructTree([25, 16, 26, 4, 21, 35, 45, 47, 69]);
	expect(grabAllLeaves(tree.root)).toEqual([4, 21, 69]);
});

// Test Case 7:
test("Return an array of [1, 4, 10, 12, 18, 21] leaf nodes", () => {
	const tree = constructTree([15, 7, 20, 2, 10, 17, 21, 1, 4, 16, 18]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 10, 16, 18, 21]);
});
/*

  		   15
		/	   \
	   7        20
	 /  \      /  \
    2    10  17    21
   / \      /  \
  1   4    16   18

*/

// Test Case 8:
test("Return an array of [1, 4, 34, 89, 121, 125, 167] leaf nodes", () => {
	const tree = constructTree([52, 25, 147, 6, 34, 99, 167, 2, 89, 123, 1, 4, 121, 125]);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 34, 89, 121, 125, 167]);
});
/*
  
			  52
			/	 \
		  25     147
		 /  \   /   \
		6   34 99   167
	   /      /  \
	  2      89  123  
	 / \        /   \
	1   4      121  125
  
*/

// Test Case 9: //* Sample Input: refer to Images -> BST-structure-4.png
test("Return an array of [13] leaf nodes", () => {
	const tree = constructTree([62, 13]);
	expect(grabAllLeaves(tree.root)).toEqual([13]);
});