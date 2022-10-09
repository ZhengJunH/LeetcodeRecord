var largestNumber = function (nums) {
    nums.sort((a, b) => Number(b.toString() + a.toString()) - Number(a.toString() + b.toString()))
   
    return nums[0] === 0 ? '0' : nums.join('')
};