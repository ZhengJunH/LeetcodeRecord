var findMin = function (nums) {
    let left = 0
    let right = nums.length - 1

    let minNumber = 10001

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] < nums[right]) {
            minNumber=Math.min(minNumber,nums[mid])

            right = mid - 1
        } else {
            minNumber=Math.min(minNumber,nums[left])

            left = mid + 1
        }
    }

    return minNumber
};