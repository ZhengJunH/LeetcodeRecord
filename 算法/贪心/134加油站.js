var canCompleteCircuit = function (gas, cost) {
    let minIndex = 0//记录起始索引

    let minAdrress = 10001//哨兵量

    let spare = 0//正负差

    let len = gas.length

    for (let i = 0; i < len; i++) {
        spare += gas[i] - cost[i]//合为正才能成功

        if (spare < minAdrress) {//贪心
            minAdrress = spare
            minIndex = i
        }

    }

    return spare < 0 ? -1 : (minIndex + 1) % len
    
}