var restoreIpAddresses = function (s) {
    const res = []

    const path = []

    const IPaddressstrack = (path, startIndex) => {
        if (path.length === 4) {
            if (startIndex === s.length) {
                res.push(path.join('.'))
            }
        }

        for (let j = startIndex; j < s.length; j++) {
            const substring = s.substr(startIndex, j - startIndex + 1)

            if (Number(substring) > 255) break;

            if (substring.length > 1 && substring[0] === '0') break

            path.push(substring)
            IPaddressstrack(path, j + 1)
            path.pop()
        }

    }

    IPaddressstrack(path, 0)

    return res
    
};