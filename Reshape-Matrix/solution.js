const matrixReshape = (nums, r, c) => {
    const flat = nums.flat()
    if (flat.length > r * c) {
        return nums
    }

    if (r === 1) {
        return nums.flat()
    }

    const result = []
    let counter = r
    for (let i = 0; i < flat.length; i++) {
        if (counter === r) {
            result.push([])
            counter = 0
        } else {
            counter++
            result[result.length - 1].push(flat[i])
        }
    }

    return result
}

console.log(matrixReshape([
    [1, 2, 6],
    [3, 4, 1],
    [3, 6]
], 3, 3))