var jump = function (nums) {
    let maxDistance = 0, // 存储最大长度

        endOfCanReach = 0, // 存储当前要抵达的位置

        steps = 0; // 存储步数

    const len = nums.length; // 数组长度

    for (let i = 0; i < len; i++) {
        if (endOfCanReach >= len - 1) { // 当要抵达的位置大于等于数组长度-1，则已经获取到最小的步数了，break退出循环
            break;
        }

        maxDistance = Math.max(maxDistance, i + nums[i]) // 判断获取最大的长度

        if (i === endOfCanReach) { // 当当前位置为要抵达的位置时，更新抵达位置，step++
            endOfCanReach = maxDistance;
            
            steps++;
        }

    }
    
    return steps;

};