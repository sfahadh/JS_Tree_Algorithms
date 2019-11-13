const distributeCandies = require('./problem')

test('returns maximum number of candies sister can gain of 3', () => {
    const arr = [1, 1, 2, 2, 3, 3]
    expect(distributeCandies(arr)).toEqual(3)
})

test('returns maximum number of candies sister can gain of 2', () => {
    const arr = [1, 1, 2, 3]
    expect(distributeCandies(arr)).toEqual(2)
})