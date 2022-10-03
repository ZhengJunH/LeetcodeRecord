var solveSudoku = function (board) {
    const isVaild = (board, row, col, k) => {//校验是否为数独
        for (let i = 0; i < 9; i++) {//行，列检查
            if (board[i][col] === k || board[row][i] === k) return false
        }

        const x = Math.floor(row / 3) * 3//宫格检查
        const y = Math.floor(col / 3) * 3

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[x + i][y + j] === k) return false
            }
        }

        return true
    }
    const solveShudu = (board) => {//回溯求数独
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') continue//有值不需要放

                for (let k = 1; k <= 9; k++) {
                    k = k.toString()//填数字
                    if (isVaild(board, i, j, k)) {//如果填入后满足数独
                        board[i][j] = k//填入
                        if (solveShudu(board)) return true//回溯
                        board[i][j] = '.'
                    }
                }

                return false
            }
        }
        return board
    }
    solveShudu(board)
};