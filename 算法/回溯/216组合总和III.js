var combinationSum3 = function (k, n) {
    const res = []
    
    const path = []

    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const backtrack = (sum, path, index) => {
        if (sum === n && path.length === k) {
            res.push([...path])
        }

        for (let i = index; i < 9; i++) {
            path.push(nums[i])
            backtrack(sum + nums[i], path, i + 1)
            path.pop()
        }
    }

    backtrack(0, path, 0)
    
    return res
};