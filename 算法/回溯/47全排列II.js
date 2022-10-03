var permuteUnique = function (nums) {
    const res = []

    const path = []

    let targetArray = new Array(nums.length).fill(false)

    const Alltrack = (nums, path) => {
        if (path.length === nums.length) {
            res.push([...path])
        }

        let set = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (targetArray[i]) continue;

            if (set.has(nums[i])) continue

            path.push(nums[i])

            set.add(nums[i])

            targetArray[i] = true

            Alltrack(nums, path)

            targetArray[i] = false

            path.pop()

        }
    }

    Alltrack(nums, path)
    
    return res
};