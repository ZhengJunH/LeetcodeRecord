
var canConstruct = function (ransomNote, magazine) {
    let map = {}//记录的对象
    
    for (let el of magazine) {//遍历字符串
        map[el] = (map[el] || 0) + 1
    }

    for (let el of ransomNote) {
        if (map[el]) {//如果有
            map[el]--//对应减去
            
            if (map[el] < 0) return false//有一个小于零，返回错误
        }
        else {//找不到对应元素
            return false
        }
    }

    return true//退出循环，则成功
};