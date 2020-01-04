var balancedStringSplit = function(s) {
    const results = [];
    let str = "";
    let count = 0;

    for (char of s.split("")) {
        if (char === "R") {
            count++;
            str += char;
        } 

        if (char === "L") {
            count--;
            str += char;
        }

        if (count === 0) {
            results.push(str);
            str = "";
        }
    }

    return results.length;
};

console.log(balancedStringSplit("RLRRLLRLRL"))