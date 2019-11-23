const characterMapping = str => {
    const hashmap = {}
    let counter = 0

    for (let char of str) {
        if (!hashmap[char] && hashmap[char] !== 0) {
            hashmap[char] = counter
            counter++
        }
    }

    const results = []
    const hashArray = Object.entries(hashmap)

    for (let char of str) {
        hashArray.map(entries => {
            if (entries.includes(char)) {
                results.push(entries[1])
            }
        })
    }
    return results
}

console.log(characterMapping("babbcb"))
// characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]