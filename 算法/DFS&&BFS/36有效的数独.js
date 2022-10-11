var isValidSudoku = function(board) {
    // 处理单个数
   for (let i = 0; i < board.length; i++) { // 行
       for (let j = 0; j < board.length; j++) {
           if (board[i][j] !== '.') {
               if (!isTrue(i, j, board)) {
                   return false
               }
           }
       }
   }
   // 处理九宫格
   if (!isNine(board)) return false
   return true
};
function isTrue(i, j, board) {
   // 行遍历
   for (let m = j + 1; m < board[i].length; m++) {
       if (board[i][m] === board[i][j]) return false
   }
   // 列遍历
   for (let n = i + 1; n < board[i].length; n++) {
       if (board[n][j] === board[i][j]) return false
   }
   return true
}
// 确定九宫格起始坐标
function isNine(board) {
   for (let i = 0; i < board.length; i += 3) {
       for (let j = 0; j < board.length; j += 3) {
           if (!isSet(i, j, board)) return false
       }
   }
   return true
}
// 判断九宫格是否重复
function isSet(i, j, board) {
   const set = new Set()
   let k = 0
   for (let m = 0; m < 3; m++) {
       for (let index = 0; index < 3; index++) {
           if (board[i + m][j + index] === '.') {
               k++
               continue
           }
           set.add(board[i + m][j + index])
       }
   }
   if (set.size === 9 - k) return true
   return false
};