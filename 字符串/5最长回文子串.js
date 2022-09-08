/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const getLength = (left, right, s) => {//箭头函数传入参数
        
        while (left >= 0 && right <= s.length && s[left] === s[right]) {//判断是否继续循环的条件
            left--;
            right++;
        }

        return right - left - 1//返回长度
    }
    let start = 0;//记录最长回文子串的位置
   
    let end = 0;

    for (let i = 0; i < s.length; i++) {//循环
        const total1 = getLength(i, i, s);//当前位置为出发点

        const total2 = getLength(i, i + 1, s);//当前字符与下一个字符相同

        const total = Math.max(total1, total2)//判断长短

        if (total > end - start) {//计算答案的位置
            start = Math.ceil(i - (total - 1) / 2);

            end = Math.floor(i + total / 2)
        }
    }
    
    return s.slice(start, end + 1)//返回答案
};