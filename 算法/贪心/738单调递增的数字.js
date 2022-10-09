var monotoneIncreasingDigits = function (n) {
    let str = n + ''//转为字符串

    let len = str.length

    let arr = str.split('')//将每一个字符串区分开

    let lastIndex = len//记录要退位成9的索引

    for (let i = len - 1; i > 0; i--) {
        if (arr[i] < arr[i - 1]) {//如果小 退一位
            arr[i - 1] -= 1;
            lastIndex = i;
        }
    }

    for (let j = lastIndex; j <= len - 1; j++) {//找到退位成9的索引
        arr[j] = "9"
    }

    return arr.join('')
};