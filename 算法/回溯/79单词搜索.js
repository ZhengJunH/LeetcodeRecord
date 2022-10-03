var exist = function (board, word) {
    board[-1] = []

    board.push([])

    const dfs = (board, word, y, x, i) => {
        if (i + 1 === word.length) return true

        let temp = board[y][x]

        board[y][x] = false
        if (board[y][x + 1] === word[i + 1] && dfs(board, word, y, x + 1, i + 1)) return true
        if (board[y][x - 1] === word[i + 1] && dfs(board, word, y, x - 1, i + 1)) return true
        if (board[y + 1][x] === word[i + 1] && dfs(board, word, y + 1, x, i + 1)) return true
        if (board[y - 1][x] === word[i + 1] && dfs(board, word, y - 1, x, i + 1)) return true
        board[y][x] = temp

    }

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (board[y][x] === word[0] && dfs(board, word, y, x, 0)) return true
        }
    }

    return false
    
};