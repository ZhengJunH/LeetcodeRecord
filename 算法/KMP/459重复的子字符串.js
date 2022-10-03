var repeatedSubstringPattern = function (s) {
    const n = s.length

    for (let i = 1; i < n; i++) {
        let substr = s.substr(0, i)

        if (n % substr.length === 0) {
            let repeat = n / substr.length
            if (substr.repeat(repeat) === s) return true
        }

    }

    return false
    
};