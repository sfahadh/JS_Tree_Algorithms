// Strings can be segregated into both their letter and digit components.

// A double palindrome is when a string's letter component and digit component are both palindromes.
// A single-palindrome is when either (but not both) the letter component or the digit component are palindromes.

// Link: https://edabit.com/challenge/KsbT9c2zf7jczanTt

const palindromeSet = arr => {
    let numString = ''
    let letterString = ''
    let counter = 0

    const letters = /^[A-Za-z]*$/
    const numbers = /^[0-9]*$/
    const results = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].match(letters)) {
                letterString += arr[i][j]
            } else if (arr[i][j].match(numbers)) {
                numString += arr[i][j]
            }
        }

        if (letterString === letterString.split('').reverse().join('') && letterString) {
            counter++
        }
        letterString = ''

        if (numString === numString.split('').reverse().join('') && numString) {
            counter++
        }
        numString = ''

        results.push(counter)
        counter = 0
    }

    return results
}

// "cab97ac79" // double-palindrome
// "cabac" and "9779" are both palindromes.

// "1abc4de1" // single-palindrome
// "141" is a palindrome.

module.exports = palindromeSet