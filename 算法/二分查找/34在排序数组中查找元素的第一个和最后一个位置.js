var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    let res = 0

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] === target) {
            res = mid;
            break
        }
        if (nums[mid] > target) {
            right = mid - 1
        } 
        else if (nums[mid] < target) {
            left = mid + 1
        }

    }
    if (left > right) return [-1, -1]

    let first = res
    let last = res

    while (nums[first] === nums[first - 1]) first--; // 向左尝试找相同的元素
    while (nums[last] === nums[last + 1]) last++;
    
    return [first, last]
};