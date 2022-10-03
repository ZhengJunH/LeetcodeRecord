var subsets = function (nums) {
    let res = []

    let path = []

    const backstrack = (nums, path, index) => {
        res.push([...path])

        for (let i = index; i < nums.length; i++) {
            
            path.push(nums[i])

            backstrack(nums, path, i + 1)

            path.pop()

        }
        
    }

    backstrack(nums, path, 0)
    
    return res
};