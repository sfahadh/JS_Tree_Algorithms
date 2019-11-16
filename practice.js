// let genAnagrams = (word, anagram = '', anagrams = []) => {
//     if (!word) {
//         anagrams.push(anagram)
//         return
//     }

//     for (let i = 0; i < word.length; i++) {
//         anagram += word[i]
//         genAnagrams(word.slice(0, i) + word.slice(i + 1), anagram, anagrams)
//         anagram = anagram.slice(0, anagram.length - 1)
//     }

//     return [...new Set(anagrams)]
// }

// console.log(genAnagrams('ABC'))


function getAllPermutations(string) {
    var results = []; // 'ABC'

    if (string.length === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) { // i = 0  
        var firstChar = string[i]; // firstChar = 'A'
        var charsLeft = string.substring(0, i) + string.substring(i + 1); // charLeft = 'BC'
        var innerPermutations = getAllPermutations(charsLeft); // innerPermutations = 'BC'
        for (var j = 0; j < innerPermutations.length; j++) { //
            results.push(firstChar + innerPermutations[j]); // 
        }
    }
    return results;
}

console.log(getAllPermutations("ABC"))