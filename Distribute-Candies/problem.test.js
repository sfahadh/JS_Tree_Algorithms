const distributeCandies = require('./problem')

test('sister should gain 3 candies', () => {
    const arr = [1, 1, 2, 2, 3, 3]
    expect(distributeCandies(arr)).toEqual(3)
})

test('sister should gain 2 candies', () => {
    const arr = [1, 1, 2, 3]
    expect(distributeCandies(arr)).toEqual(2)
})

test('sister should gain 0 candies', () => {
    const arr = []
    expect(distributeCandies(arr)).toEqual(0)
})

test('sister should gain 3 candies', () => {
    const arr = [3, 3, 3, 4, 4, 4, 5, 5, 5]
    expect(distributeCandies(arr)).toEqual(3)
})