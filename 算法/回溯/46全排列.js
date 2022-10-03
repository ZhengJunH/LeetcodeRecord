var permute = function (nums) {
    const res = []

    const path = []

    let targetArray = new Array(nums.length).fill(false)

    let length = nums.length

    const backtrack = (nums, len, path) => {
        
        if (path.length === length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < len; i++) {
            if (targetArray[i]) continue

            path.push(nums[i])

            targetArray[i] = true

            backtrack(nums, len, path)

            targetArray[i] = false

            path.pop()
        }

    }

    backtrack(nums, length, path)

    return res
    
} 