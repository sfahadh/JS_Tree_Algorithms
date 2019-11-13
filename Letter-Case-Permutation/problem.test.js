const letterCasePermutation = require('./problem')

test('return an array of 4 indices', () => {
    const input = "a1b2"
    const result = ["a1b2", "a1B2", "A1b2", "A1B2"]
    expect(letterCasePermutation(input)).toBe(result)
})