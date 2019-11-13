const distributeCandies = require('./problem')

test('sister should gain 3 candies', () => {
    const arr = [1, 1, 2, 2, 3, 3]
    expect(distributeCandies(arr)).toEqual(3)
})

test('sister should gain 2 candies', () => {
    const arr = [1, 1, 2, 3]
    expect(distributeCandies(arr)).toEqual(2)
})