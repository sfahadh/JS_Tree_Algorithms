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