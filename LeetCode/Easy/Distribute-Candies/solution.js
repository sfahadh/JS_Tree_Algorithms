const distributeCandies = candies => {
    const hashmap = {}
    for (let candy of candies) {
        hashmap[candy] ? hashmap[candy]++ : hashmap[candy] = 1
    }

    return Math.min(Object.keys(hashmap).length, candies.length / 2)
};