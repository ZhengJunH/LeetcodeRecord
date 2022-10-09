var canThreePartsEqualSum = function (arr) {
    let sum = arr.reduce((a, b) => a + b)//求和

    let temp = 0//记录部分的合值

    let num = 3

    for (let i of arr) {
        temp += i//记录合

        if (temp === sum / 3) {
            temp = 0
            num--
        }

    }

    return num <= 0
};