// Solution 1
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

// Solution 2
const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeSet = arr => {
    return arr.map(str => {
        const digits = (str.match(/\d+/g) || []).join('') || 'no';
        const letters = (str.match(/[a-z]+/gi) || []).join('') || 'no';
        return isPalindrome(digits) + isPalindrome(letters);
    });
}

// Solution 3
const palindromeSet = arr => {
    const isPalindrome = chars => {
        if (chars.length === 0) {
            return false;
        }
        return chars.join('') === chars.reverse().join('');
    }

    const countPalindromes = s => {
        let count = 0;
        const digits = s.match(/\d/g) || [];
        if (isPalindrome(digits)) {
            count++;
        }
        const chars = s.match(/[a-z]/g) || [];
        if (isPalindrome(chars)) {
            count++;
        }
        return count;
    };
    return arr.map(countPalindromes);
}