var hammingWeight = function (n) {
    let index = 0

    while (n) {//消除最后一位1
        index++
        n = n & (n - 1)
    }
    return index
};