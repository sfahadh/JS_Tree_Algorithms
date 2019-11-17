const matrixReshape = require('./problem')

test('should return 1 by 4 dimensional array', () => {
    const arr = [
        [1, 2],
        [3, 4]
    ]
    const result = [1, 2, 3, 4]
    expect(matrixReshape(arr, 1, 4)).toEqual(result)
})

test('should return original array', () => {
    const arr = [
        [1, 2, 3],
        [3, 4, 5]
    ]
    const result = [
        [1, 2, 3],
        [3, 4, 5]
    ]
    expect(matrixReshape(arr, 2, 2)).toEqual(result)
})

test('should return 3 by 3 dimensional array', () => {
    const arr = [
        [1, 2, 6],
        [3, 4],
        [1],
        [3, 6]
    ]
    const result = [
        [1, 2, 6],
        [3, 4, 1],
        [3, 6]
    ]
    expect(matrixReshape(arr, 3, 3)).toEqual(result)
})