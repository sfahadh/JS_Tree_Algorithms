const BST = require("../../Starter/BST");
const firstCousins = require("./problem");

// Test Case 1:
test("Return false because 5 and 13 are not cousins", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  tree.insert(1);
  expect(firstCousins(tree.root, 5, 13)).toEqual(false);
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
test("Return false because 25 and 43 are not cousins", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  expect(firstCousins(tree.root, 25, 43)).toEqual(false);
});
/*

  	   43
  	 /	  \
   25      65

*/

// Test Case 3:
test("Return false because there is only 1 node - Part I", () => {
  const tree = new BST();
  tree.insert(17);
  expect(firstCousins(tree.root, 14, 32)).toEqual(false);
});
/*

  	17

*/

// Test Case 4:
test("Return true because 8 and 21 are cousins", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(firstCousins(tree.root, 8, 21)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 5:
test("Return false because there is no tree", () => {
  expect(firstCousins(null)).toEqual(false);
});

// Test Case 6:
test("Return true because 24 and 45 are cousins", () => {
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
  tree.insert(24);
  expect(firstCousins(tree.root, 24, 45)).toEqual(false);
});
/*

	     25                          
	    /  \             	   
    16    26     
   /  \     \           
  5    21    35  
         \     \
          24    45
                  \
                   47
                     \
                      69           

*/

// Test Case 7:
test("Return false because there is only 1 node - Part II", () => {
  const tree = new BST();
  tree.insert(17);
  expect(firstCousins(tree.root, 17, 234)).toEqual(false);
});
/*

  	17

*/

// Test Case 8:
test("Return true because 8 and 16 are cousins", () => {
  const tree = new BST();
  tree.insert(15);
  tree.insert(17);
  tree.insert(3);
  tree.insert(21);
  tree.insert(8);
  tree.insert(2);
  tree.insert(16);
  expect(firstCousins(tree.root, 8, 16)).toEqual(true);
});
/*

  	   15
  	 /	  \
    3      17
  /  \    /  \
 2    8  16   21

*/

// Test Case 9:
test("Return true even if 2 and 89 are distant cousins", () => {
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
  expect(firstCousins(tree.root, 2, 89)).toEqual(true);
});
/*

  	        52
  	     /	    \
       25       147
      /  \     /   \
     6   34   99   167
    /        /  \
   2        89  123  

*/

// Test Case 10:
test("Return true because 5 and 35 are cousins", () => {
  const tree = new BST();
  tree.insert(25);
  tree.insert(16);
  tree.insert(26);
  tree.insert(5);
  tree.insert(21);
  tree.insert(35);
  tree.insert(45);
  tree.insert(24);
  expect(firstCousins(tree.root, 5, 35)).toEqual(true);
});
/*

	     25                          
	    /  \             	   
    16    26     
   /  \     \           
  5    21    35  
         \     \
          24    45       

*/

// Test Case 11:
test("Return false because 2 and 13 are not cousins", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(2);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  expect(firstCousins(tree.root, 2, 13)).toEqual(false);
});
/*

  		    7
  	    /  	\
       5     13
     /  \   /  \
    2    6 9   15

*/

// Test Case 12:
test("Return false because 15 and 7 are not cousins", () => {
  const tree = new BST();
  tree.insert(7);
  tree.insert(5);
  tree.insert(13);
  tree.insert(6);
  tree.insert(9);
  tree.insert(15);
  expect(firstCousins(tree.root, 15, 7)).toEqual(false);
});
/*

       7
     /   \
    5     13
     \   /  \
      6 9   15

*/

// Test Case 13:
test("Return false because 12 and 79 are not cousins", () => {
  const tree = new BST();
  tree.insert(43);
  tree.insert(25);
  tree.insert(65);
  tree.insert(12);
  tree.insert(79);
  expect(firstCousins(tree.root, 12, 79)).toEqual(true);
});
/*

        43
      /	   \
    25      65
   /          \
 12            79

*/

// Test Case 14:
test("Return true even if 121 and 125 are very distant cousins", () => {
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
  expect(firstCousins(tree.root, 121, 125)).toEqual(false);
});
/*

            52
          /	  \
        25     147
       /  \   /   \
      6   34 99   167
     /      /  \
    2      89  123  
   / \        /   \
  1   4      121  125

*/