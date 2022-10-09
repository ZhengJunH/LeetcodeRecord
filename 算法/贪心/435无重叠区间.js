var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1])//第二个数从小到大排序

    let pre = intervals[0][1]//取第一个数的右值作为变量

    let ans = 0

    for (let i = 1; i < intervals.length; i++) {
        const cur = intervals[i][0]//从第二个数起 每一个数的左值

        if (cur < pre) {//第二个数的左值 比第一个数的右值小 说明有重合
            ans++
            pre = Math.min(pre, intervals[i][1])//记录更小的那个值 保留合集
        } 
        else {//否则将这个数的右值作为下一次循环的变量
            pre = intervals[i][1]
        }
    }

    return ans//返回区间个数

};