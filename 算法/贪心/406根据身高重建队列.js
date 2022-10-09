var reconstructQueue = function (people) {
    const res = []

    people.sort((a, b) => { 
        if (a[0] === b[0]) return a[1] - b[1]; //如果第一个数相同，第二个数从小到大排
        return b[0] - a[0] //第一个数从大到小排 
    });
    for (let i = 0; i < people.length; i++) {//将排序好的身高数组 按照第二个数值索引 依次放入答案数组
        res.splice(people[i][1], 0, people[i])
    }
    return res

};