/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) { //遍历，找到与val相等的值
            nums.splice(i, 1); //用splice方法删除找到的元素
            i--;
        }
    }
    return nums.length//返回数组
};