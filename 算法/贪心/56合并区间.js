var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])//对区间进行第一个数排序

    const res = [intervals[0]]//将第一个数加入答案数组

    for (let i = 1; i < intervals.length; i++) {
        const end = res[res.length - 1]//取得最后一个区间

        if (intervals[i][0] >= end[0] && intervals[i][0] <= end[1]) {//有重合
            const t = [Math.min(intervals[i][0], end[0]), Math.max(intervals[i][1], end[1])]

            res[res.length - 1] = t//更新区间
            
            continue
        } 
        else {//无重合就压栈
            res.push(intervals[i])
        }

    }

    return res//返回结果
};