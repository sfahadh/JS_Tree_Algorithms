const matrixReshape = require('./problem')

test('1 by 4 dimensional array', () => {
    const arr = [
        [1, 2],
        [3, 4]
    ]
    const result = [1, 2, 3, 4]
    expect(matrixReshape(arr, 1, 4)).toEqual(result)
})