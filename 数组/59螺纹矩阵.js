/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let left = 0;//上下左右
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;

    const totalsteps = n * n;//总步数

    let timelysteps = 0;//实时步数

    const dev = [];//初始化数组

    for (let i = 0; i < n; i++) {
        dev[i] = []
    }

    while (timelysteps < totalsteps) { //数组遍历操作
        for (let i = left; i <= right; i++) dev[left][i] = ++timelysteps;//从左到右
        top++;
        for (let i = top; i <= bottom; i++) dev[i][right] = ++timelysteps;//从上到下
        right--;
        for (let i = right; i >= left; i--) dev[bottom][i] = ++timelysteps//从右到左
        bottom--;
        for (let i = bottom; i >= top; i--) dev[i][left] = ++timelysteps//从下到上
        left++
    }
    return dev
};