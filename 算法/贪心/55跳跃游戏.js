var canJump = function (nums) {
    let maxDistance = 0

    for (let i = 0; i < nums.length; i++) {
        
        maxDistance = Math.max(maxDistance, nums[i] + i)

        if (maxDistance >= nums.length - 1) return true//能不能到达终点

        if (maxDistance === i && nums[i] === 0) return false

    }
};