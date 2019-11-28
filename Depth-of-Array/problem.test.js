const depth = require('./problem')

test('return the value of 1', () => {
    const input = [1, 2, 3, 4]
    expect(depth(input)).toEqual(1)
})

test('return the value of 2', () => {
    const input = [1, [2, 3, 4]]
    expect(depth(input)).toEqual(2)
})

test('return the value of 3', () => {
    const input = [1, [2, [3, 4]]]
    expect(depth(input)).toEqual(3)
})

test('return the value of 4', () => {
    const input = [1, [2, [3, [4]]]]
    expect(depth(input)).toEqual(4)
})

test('return the value of 4', () => {
    const input = [1, [2, [3, [4]]], 4]
    expect(depth(input)).toEqual(4)
})

test('return the value of 2', () => {
    const input = [1, [2], 3, [4], 5, [6]]
    expect(depth(input)).toEqual(2)
})

test('return the value of 3', () => {
    const input = [1, 2, 3, 4, [
            [5]
        ],
        [6], 7
    ]
    expect(depth(input)).toEqual(3)
})