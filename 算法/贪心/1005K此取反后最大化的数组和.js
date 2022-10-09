var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => a - b)//排序

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0 && k > 0) {//负数取反
            nums[i] = nums[i] * (-1)
            k--
        }
    }

    if (k > 0 && k % 2 === 1) {//取反后仍存在奇数K

        nums.sort((a, b) => a - b)//排序后第一位取反

        nums[0] = -nums[0]
    }

    return nums.reduce((sum, index) => sum += index)//求和
};