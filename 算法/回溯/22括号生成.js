var generateParenthesis = function (n) {
    let res = []

    const backtrack = (left, right, str) => {
        if (left === n && right === n) res.push(str)//回溯终止条件

        if (left > right) backtrack(left, right + 1, str + ')')//添加括号

        if (left < n) backtrack(left + 1, right, str + '(')

    }

    backtrack(0, 0, '')

    return res
    
};