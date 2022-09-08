
var twoSum = function (nums, target) {
    let map = new Map()//建立一个哈希表

    for (let i = 0; i < nums.length; i++) {//遍历

        let temp = target - nums[i]//记录所缺的值
        
        if (map.has(temp)) {//如果表中有记录，则返回对应的索引值
            return [map.get(temp), i]
        } 
        
        else {//如果没有，则记录当前值与索引值
            map.set(nums[i], i)
        }
    }
};