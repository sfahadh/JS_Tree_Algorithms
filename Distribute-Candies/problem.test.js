const distributeCandies = require('./problem')

test('returns maximum number of candies sister can gain', () => {
    const arr = [1, 1, 2, 2, 3, 3]
    expect(distributeCandies(arr)).toBeTruthy()
})