/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const strLength = s.length;//记录长度

    if (strLength % 2 === 1) return false//如果长度为奇数，直接返回

    const strMap = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']]) //记录键值对，括号的匹配

    const recordstr = [] //记录实时字符串

    for (let str of s) {//对每一个字符进行遍历
       
        if (strMap.has(str)) {//如果有，栈出一个左括号

            if (!recordstr || recordstr[recordstr.length - 1] !== strMap.get(str)) return false
            recordstr.pop()

        } else {//是左括号则入栈

            recordstr.push(str)
            
        }
    }

    return !recordstr.length//如果长度为0，则为true
};