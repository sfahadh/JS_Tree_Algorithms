const BST = require("../../Starter/BST");
const grabAllLeaves = require("./problem");

// Test Case 1:
test("Return an array of [1, 6, 9, 15] leaf nodes", () => {
	const tree = new BST();
	tree.insert(7);
	tree.insert(5);
	tree.insert(13);
	tree.insert(2);
	tree.insert(6);
	tree.insert(9);
	tree.insert(15);
	tree.insert(1);
	expect(grabAllLeaves(tree.root)).toEqual([1, 6, 9, 15]);
});
/*

  		  7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15
   /
  1 

*/

// Test Case 2:
test("Return an array of [25, 65] leaf nodes", () => {
	const tree = new BST();
	tree.insert(43);
	tree.insert(25);
	tree.insert(65);
	expect(grabAllLeaves(tree.root)).toEqual([25, 65]);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return an array of [17] leaf nodes", () => {
	const tree = new BST();
	tree.insert(17)
	expect(grabAllLeaves(tree.root)).toEqual([17]);
});
/*

  	17

*/

// Test Case 4:
test("Return an array of [2, 8, 16, 21] leaf nodes", () => {
	const tree = new BST();
	tree.insert(15);
	tree.insert(17);
	tree.insert(3);
	tree.insert(21);
	tree.insert(8);
	tree.insert(2);
	tree.insert(16);
	expect(grabAllLeaves(tree.root)).toEqual([2, 8, 16, 21]);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return an empty array", () => {
	expect(grabAllLeaves(null)).toEqual([]);
});

// Test Case 6:
test("Return an array of [5, 21, 69] leaf nodes", () => {
	const tree = new BST();
	tree.insert(25);
	tree.insert(16);
	tree.insert(26);
	tree.insert(5);
	tree.insert(21);
	tree.insert(35);
	tree.insert(45);
	tree.insert(47);
	tree.insert(69);
	expect(grabAllLeaves(tree.root)).toEqual([5, 21, 69]);
});
/*

	    25                          
	   /  \             	   
     16    26     
    /  \     \           
   5   21     35  
                \
                 45
                   \
                    47
                      \
                       69           

*/

// Test Case 7:
test("Return an array of [1, 4, 10, 12, 18, 21] leaf nodes", () => {
	const tree = new BST();
	tree.insert(15);
	tree.insert(20);
	tree.insert(7);
	tree.insert(21);
	tree.insert(2);
	tree.insert(16);
	tree.insert(1);
	tree.insert(4);
	tree.insert(12);
	tree.insert(18);
	tree.insert(10);
	expect(grabAllLeaves(tree.root)).toEqual([1, 4, 10, 12, 18, 21]);
});
/*

  		   15
		/	   \
	   7        20
	 /  \      /  \
    2    10  16   21
   / \      /  \
  1   4    12   18

*/

// Test Case 8:
test("Return an array of [1, 4, 34, 89, 121, 125, 167] leaf nodes", () => {
	const tree = new BST();
	tree.insert(52);
	tree.insert(147);
	tree.insert(25);
	tree.insert(99);
	tree.insert(167);
	tree.insert(6);
	tree.insert(34);
	tree.insert(2);
	tree.insert(89);
	tree.insert(123);
	tree.insert(121);
	tree.insert(125);
	tree.insert(1);
	tree.insert(4);
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

// Test Case 9:
test("Return an array of [25] leaf nodes", () => {
	const tree = new BST();
	tree.insert(43);
	tree.insert(25);
	expect(grabAllLeaves(tree.root)).toEqual([25]);
});
/*

  	   43
  	 /	  
   25      

*/