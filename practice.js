function palindromeSet(arr) {
    var _ = function (a) {
        if (a.length == 0) return 0;
        while (a.length > 1) {
            if (a.pop() != a.shift()) {
                return 0;
            }
        }
        return 1;
    };
    var r = [];
    for (var i in arr) {
        var a1 = arr[i].replace(/\d/g, '').split('');
        var a2 = arr[i].replace(/[a-z]/g, '').split('');
        console.log(a2)
    }
    return r;
}

console.log(palindromeSet(["cbc", "ccc888", "ccc789", "abc89"]))