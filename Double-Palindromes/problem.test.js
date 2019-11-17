const palindromeSet = require('./problem')

test('returns an array of [2, 2, 1, 0]', () => {
    const input = ["cb77c", "ccc888", "ccc789", "abc89"]
    const result = [2, 2, 1, 0]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [1, 2, 1, 0]', () => {
    const input = ["18a99b89cc881ba", "p7o8p987", "p7o", "p7o8"]
    const result = [1, 2, 1, 0]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [2, 1, 2, 2]', () => {
    const input = ["ab9a", "abba", "aa78bb8bbaa7", "a88a"]
    const result = [2, 1, 2, 2]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [0, 1, 1, 1]', () => {
    const input = ["789", "555", "ccc", "abba"]
    const result = [0, 1, 1, 1]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [2, 2, 2]', () => {
    const input = ["7a", "5f", "6c"]
    const result = [2, 2, 2]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [1, 1, 1]', () => {
    const input = ["7ab", "5fc", "6cd"]
    const result = [1, 1, 1]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [0, 0, 0]', () => {
    const input = ["87ab", "15fc", "26cd"]
    const result = [0, 0, 0]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [0, 2]', () => {
    const input = ["1234ab", "144a441"]
    const result = [0, 2]
    expect(palindromeSet(input).toEqual(result))
})

test('returns an array of [0]', () => {
    const input = [""]
    const result = [0]
    expect(palindromeSet(input).toEqual(result))
})