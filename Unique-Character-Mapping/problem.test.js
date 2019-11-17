const characterMapping = require('./problem')

test('return an array of [0, 1, 2, 3]', () => {
    const input = "abcd"
    const result = [0, 1, 2, 3]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 1]', () => {
    const input = "abb"
    const result = [0, 1, 1]
    expect(characterMapping(input)).toEqual(result)
})