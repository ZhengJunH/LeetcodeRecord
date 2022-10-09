var maxProfit = function (prices) {
    let Maxprofit = 0//记录最大收益

    let ans = 0//记录前后差

    for (let i = 1; i < prices.length; i++) {
        ans = prices[i] - prices[i - 1]

        if (ans > 0) {//贪心计算结果 但不是买卖过程 具体过程用dp更容易理解
            Maxprofit += ans
        }

    }
    
    return Maxprofit//返回最大收益
};