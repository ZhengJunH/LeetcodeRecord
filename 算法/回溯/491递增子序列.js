var findSubsequences = function (nums) {
    const res = []

    const path = []

    const backstrack = (path, startIndex) => {
        if (path.length > 1) {
            res.push(path.slice())
        }

        let set = new Set()

        for (let i = startIndex; i < nums.length; i++) {
            if (path.length > 0 && nums[i] < path[path.length - 1] || set.has(nums[i])) {
                continue
            }

            set.add(nums[i])

            path.push(nums[i])

            backstrack(path, i + 1)

            path.pop()
            
        }

    }

    backstrack(path, 0)

    return res
};