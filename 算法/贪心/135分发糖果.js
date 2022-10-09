var candy = function (ratings) {
    let result = new Array(ratings.length).fill(1)//每人最少一颗糖果

    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {//如果左向右 递增
            result[i] = result[i - 1] + 1
        }
    }

    for (let i = ratings.length - 1; i > 0; i--) {
        if (ratings[i] < ratings[i - 1]) {//如果右向左 递增
            result[i - 1] = Math.max(result[i - 1], result[i] + 1) //取最大值
        }
    }
    
    return result.reduce((pre, cur) => pre += cur)
};