/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;//记录左边
    let end = 0;//记录右边
    let sum = 0;//记录合
    let min = Infinity;//记录最短长度
    while (end <= nums.length) {
        sum += nums[end];//一直加直到和大于target
        while (sum >= target) {
            min = Math.min(min, end - start + 1);//找到最小长度
            sum -= nums[start];
            start++;
        }
        end++
    }
    return min === Infinity ? 0 : min
};