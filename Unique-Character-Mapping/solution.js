// Solution 1
// const characterMapping = str => {
//     const hashmap = {}
//     let counter = 0

//     for (let char of str) {
//         if (!hashmap[char] && hashmap[char] !== 0) {
//             hashmap[char] = counter
//             counter++
//         }
//     }

//     const results = []
//     const hashArray = Object.entries(hashmap)

//     for (let char of str) {
//         hashArray.map(entries => {
//             if (entries.includes(char)) {
//                 results.push(entries[1])
//             }
//         })
//     }

//     return results
// }

// Solution 2
// const characterMapping = str => {
//     let char = str.split('');
//     let filteredLetter = char.filter(function (letter, i, arr) {
//         return arr.indexOf(letter) === i;
//     });

//     return char.map(letter => filteredLetter.indexOf(letter));
// }

// Solution 3
const characterMapping = str => {
    const filteredLetter = Array.from(new Set(str.split('')))
    return str.split('').map(letter => filteredLetter.indexOf(letter))
}

console.log(characterMapping("babbcb"))
// characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]