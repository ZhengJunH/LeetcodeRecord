var maxArea = function (height) {
    let left = 0;//左指针

    let right = height.length - 1;//右指针

    let maxArea = 0//最大记录量

    let tempArea = 0//变量

    while (left < right) {//指针不相遇
        tempArea = (right - left) * Math.min(height[left], height[right])//算每一个位置的容量

        if (tempArea > maxArea) {//记录最大值
            maxArea = tempArea
        }

        if (height[left] < height[right]) {//谁小谁移动
            left++
        } else {
            right--
        }

    }
    
    return maxArea
};