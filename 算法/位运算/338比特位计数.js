var countBits = function (n) {
    let res = []

    for (let i = 0; i <= n; i++) {
        let j = i
        let index = 0
        while (j > 0) {
            index++
            j = j & (j - 1)
        }
        res.push(index)
    }
    
    return res
};