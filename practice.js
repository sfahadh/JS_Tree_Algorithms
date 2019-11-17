const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeSet = arr => {
    return arr.map(str => {
        const digits = (str.match(/\d+/g) || []).join('') || 'no';
        const letters = (str.match(/[a-z]+/gi) || []).join('') || 'no';
        return isPalindrome(digits) + isPalindrome(letters);
    });
}

console.log(palindromeSet(["cbc", "ccc888", "ccc789", "abc89"]))