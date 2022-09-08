
var reverseStr = function (s, k) {

    const reverse = (s, left, right) => {//翻转函数
        
        while (left < right) {
            
            const temp = s[left]
            
            s[left] = s[right]
            
            s[right] = temp
            
            left++
            
            right--
        }
    }

    let strLength = s.length//记录长度

    const arr = Array.from(s);//将字符串拆分为数组

    for (let i = 0; i < strLength; i += 2 * k) {//遍历翻转
       
        reverse(arr, i, Math.min(i + k, strLength) - 1)//数组，起始i，结束位置（如果是最后一部分则选择的地方为strLengh-1）
    }

    return arr.join('')//返回字符串
};