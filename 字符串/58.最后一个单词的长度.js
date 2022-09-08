/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()//去除首尾空格

    let result = s.split(' ')//以空格作为分离进行split切分

    let lenght = result[result.length - 1]//得到最后一个单词

    return lenght.length//返回单词长度
    
};