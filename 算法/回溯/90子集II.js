var subsetsWithDup = function (nums) {
    const res = []

    const path = []

    nums.sort((a, b) => a - b)

    const backstrack = (path, startIndex) => {
        res.push([...path])

        for (let i = startIndex; i < nums.length; i++) {
            if (startIndex < i && nums[i] === nums[i - 1]) continue;

            path.push(nums[i])
            backstrack(path, i + 1)
            path.pop()

        }

    }

    backstrack(path, 0)
    
    return res
};