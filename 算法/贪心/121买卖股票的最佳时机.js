var maxProfit = function (prices) {
    let Maxprofit = 0//记录最大收益

    let curprofit = prices[0]

    for (let i = 1; i < prices.length; i++) {
        Maxprofit = Math.max(Maxprofit, prices[i] - curprofit)//最大收益

        curprofit = Math.min(curprofit, prices[i])//最小买入点

    }
    
    return Maxprofit//返回最大收益
};