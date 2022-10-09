var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.unshift(0)//代替量

    flowerbed.push(0)//同上

    let ans = 0

    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {//如果有三个零的地方 则可以种花
            ans++
            flowerbed[i] = 1
        }
    }

    return ans >= n ? true : false//种花数跟可种花数的比较

};