var partition = function (s) {
    const res = []

    const path = []

    const ifPalindrome = (curSubstring) => {
        for (let i = 0, j = curSubstring.length - 1; i < j; i++, j--) {
            if (curSubstring[i] != curSubstring[j]) return false
        }
        return true
    }

    const backstrack = (path, startIndex) => {
        if (path.join('').length === s.length) {
            res.push([...path])
        }

        for (let i = startIndex + 1; i <= s.length; i++) {
            const curSubstring = s.slice(startIndex, i)

            if (ifPalindrome(curSubstring)) {
                path.push(curSubstring)
                backstrack(path, i)
                path.pop()
            }

            else {
                continue
            }
        }

    }

    backstrack(path, 0)
    
    return res
};