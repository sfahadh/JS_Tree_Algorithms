const nutrition = str => {
    let counter = 0
    const arr = str.split(" ")
    const multi = [
        []
    ]
    const results = []

    const section = row => {
        if (row[row.length - 1][0] >= row[row.length - 1][1] + row[row.length - 1][2] + row[row.length - 1][3]) {
            results.push(true)
        } else {
            results.push(false)
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (counter === 4) {
            counter = 0
            section(multi)
            multi.push([])
        }
        counter++
        multi[multi.length - 1].push(parseInt(arr[i]))
    }

    section(multi)

    return results
}

console.log(nutrition("3000 1900 500 1600 2400 300 700 1200 2700 1700 500 500"))