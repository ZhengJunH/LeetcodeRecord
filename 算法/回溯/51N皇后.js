var solveNQueens = function (n) {
    const res = []
    const path = []

    const backtrack = (row, path) => {
        if (row === n) {
            //每一个索引为行
            res.push(path.map(c => {
                let arr = new Array(n).fill('.')
                arr[c] = 'Q'
                return arr.join('')
            })
            )
        }
        for (let col = 0; col < n; col++) {
            let canNotset = path.some((c, r) => {
                //c为列 r为行
                return c === col || ((r - c) === (row - col)) || ((r + c) === (row + col))
            })
            if (canNotset) continue
            backtrack(row + 1, [...path, col])
        }
    }
    backtrack(0, path)
    return res
};