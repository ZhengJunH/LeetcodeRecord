var wiggleMaxLength = function (nums) {
    let flag = 0//记录是否摆动

    let ans = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] > 0 && flag != 1) {
            ans++
            flag = 1//记录值更改
        } 
        else if (nums[i] - nums[i - 1] < 0 && flag != 2) {
            ans++
            flag = 2//同上
        }
    }

    return ans//返回长度

};