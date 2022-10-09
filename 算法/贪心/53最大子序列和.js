var maxSubArray = function (nums) {
    let sum = nums[0]//第一个数

    let maxSum = sum

    for (let i = 1; i <= nums.length - 1; i++) {
        if (sum <= 0) {//如果小于零 新数为新起点
            
            sum = nums[i]
        } 
        else {//大于零对结果有益
            sum += nums[i]
        }

        maxSum = Math.max(sum, maxSum)//比较记录值
    }

    return maxSum

};