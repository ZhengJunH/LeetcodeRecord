var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0])//第一个数排序

    const res = [points[0]]

    for (let i = 1; i < points.length; i++) {
        const pre = points[i]//第二个数

        const cur = res[res.length - 1]//数组的最后一个数

        if (cur[1] < pre[0]) res.push(pre)//最后一个数的右值 小于 遍历值的左值 需要用新的剑 长度加一

        else cur[1] = Math.min(cur[1], pre[1])//否则更新

    }

    return res.length//长度即是剑的个数

};