var findWords = function (board, words) {
    if (!words.length || !board.length || !board[0].length) return []//如果有一个为空
    
    class Node {//构建字典树
        constructor() {
            this.root = {}//子节点
            this.isEnd = false//确认单词是否结束
        }

        insert(word) {//插入单词
            let node = this.root
            for (let ch of word) {//对单词的每一个字符
                if (!node[ch]) node[ch] = {}//是没记录过的
                node = node[ch]
            }
            node.isEnd = true//结束遍历后为单词结束点
        }
    }

    const dfs = (board, node, word, row, col, res) => {
        const direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]//上下左右四个方向

        if (node.isEnd === true) res.add(word)//到达单词结尾

        let temp = board[row][col]//记录临时变量 便于DFS
        board[row][col] = '@'//回溯
        for (let cur of direction) {
            let _row = row + cur[0]//左右移动
            let _col = col + cur[1]//上下移动
            if (_row >= 0 && _row < board.length && _col >= 0 && _col < board[0].length && node[board[_row][_col]] && board[_row][_col] !== '@') {
                dfs(board, node[board[_row][_col]], word + board[_row][_col], _row, _col, res)
            }
        }
        board[row][col] = temp//回溯结束

    }

    const node = new Node()//创建字典树

    for (let cur of words) node.insert(cur)//把每个单词加入

    const res = new Set()//答案集合

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (node.root[board[row][col]]) dfs(board, node.root[board[row][col]], board[row][col], row, col, res)
        }
    }

    return Array.from(res)//返回数组形式
    
};