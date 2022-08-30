/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i]
    }//遍历 平方操作
    nums.sort((a, b) => a - b)//sort排序
    return nums//返回数组
};