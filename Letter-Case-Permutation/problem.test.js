const letterCasePermutation = require('./problem')

test('return an array of 4 indices', () => {
    const input = "a1b2"
    const result = ["a1b2", "a1B2", "A1b2", "A1B2"]
    expect(letterCasePermutation(input)).toBe(result)
})

test('return an array of 2 indices', () => {
    const input = "3z4"
    const result = ["3z4", "3Z4"]
    expect(letterCasePermutation(input)).toBe(result)
})

test('return an array of 1 indices', () => {
    const input = "12345"
    const result = ["12345"]
    expect(letterCasePermutation(input)).toBe(result)
})

test('return an array of 8 indices', () => {
    const input = "3bc3e"
    const result = ["3bc3e", "3Bc3e", "3bC3e", "3bc3E", "3BC3e", "3Bc3E", "3bC3E", "3BC3E"]
    expect(letterCasePermutation(input)).toBe(result)
})