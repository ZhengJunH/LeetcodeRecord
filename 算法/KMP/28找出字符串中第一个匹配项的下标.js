var strStr = function (haystack, needle) {
    let n = haystack.length

    let m = needle.length

    if (m === 0) return 0

    let next = new Array(m).fill(0)

    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1]
        }

        if (needle[i] === needle[j]) {
            j++
        }

        next[i] = j
    }

    // 搞懂上面的，下面的也就懂了
    for (let i = 0, j = 0; i < n; i++) {
        // 如果当前i 和 j不一致，就回退到上一个相等的位置的下一个看看是否匹配
        // 会不断回退，0为回退到边界，当回退到0意味着要重新从头开始匹配
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1]
        }

        if (haystack[i] === needle[j]) {
            j++
        }

        // 当j 和 m的长度相等时，就说明存在
        if (j === m) {
            return i - m + 1
        }

    }
    
    return -1
};
