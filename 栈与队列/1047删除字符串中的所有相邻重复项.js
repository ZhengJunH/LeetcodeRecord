/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const result = []//存答案的栈
    for (let ch of s) {//遍历
        if (result.length && result[result.length - 1] === ch) {//条件
            result.pop()//出栈
        } else {
            result.push(ch)//入栈
        }
    }
    return result.join('')//返回结果

};