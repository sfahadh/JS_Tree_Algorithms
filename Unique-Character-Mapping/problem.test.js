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

test('return an array of [0, 1, 0, 0, 2, 0]', () => {
    const input = "babbcb"
    const result = [0, 1, 0, 0, 2, 0]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 0, 0, 1, 1]', () => {
    const input = "aaabb"
    const result = [0, 0, 0, 1, 1]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 2, 2, 1, 2]', () => {
    const input = "abccbc"
    const result = [0, 1, 2, 2, 1, 2]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 2, 0, 0, 3]', () => {
    const input = "fluffy"
    const result = [0, 1, 2, 0, 0, 3]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 2, 3, 4, 5, 5]', () => {
    const input = "madness"
    const result = [0, 1, 2, 3, 4, 5, 5]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 2, 2, 3, 4, 5]', () => {
    const input = "buttery"
    const result = [0, 1, 2, 2, 3, 4, 5]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 2, 3, 2, 4]', () => {
    const input = "canine"
    const result = [0, 1, 2, 3, 2, 4]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 0, 1, 0, 1]', () => {
    const input = "hohoho"
    const result = [0, 1, 0, 1, 0, 1]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of [0, 1, 1, 1, 1, 1]', () => {
    const input = "hmmmmm"
    const result = [0, 1, 1, 1, 1, 1]
    expect(characterMapping(input)).toEqual(result)
})

test('return an array of []', () => {
    const input = ""
    const result = []
    expect(characterMapping(input)).toEqual(result)
})