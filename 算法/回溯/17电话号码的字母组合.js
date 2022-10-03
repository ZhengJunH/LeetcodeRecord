var letterCombinations = function (digits) {
    let ans = []//答案数组

    let len = digits.length//定义长度变量

    const arr = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];//确定按键值
    
    if (len === 0) return ans

    let path = []

    const strack = (digits, len, i) => {
        
        if (path.length === len) {//长度相同 此时的path为答案        
            ans.push(path.join(''))
            return;
        }

        for (const key of arr[digits[i]]) {//遍历每一个按键所对应的值
            path.push(key)

            strack(digits, len, i + 1)

            path.pop()
        }
    }

    strack(digits, len, 0)
    
    return ans
};