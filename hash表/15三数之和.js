
var threeSum = function (nums) {
    if (!nums || nums.length < 3) return []
    
    nums = nums.sort((a, b) => a - b);//从小到大排序
    
    let sum = 0; // 三个数的和

    let result = [];//答案存放

    for (let i = 0; i < nums.length; i++) {//遍历
        if (i && nums[i] === nums[i - 1]) continue; // 若当前这一项和上一项相等则跳过
        
        let left = i + 1;//左指针
        
        let right = nums.length - 1;//右指针

        while (left < right) {

            sum = nums[i] + nums[left] + nums[right];//计算合

            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
               
                result.push([nums[i], nums[left++], nums[right--]]);//压入答案
                
                while (nums[left] === nums[left - 1]) { // 一直找到不相同的那个坐标
                    left++;
                }
                
                while (nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }
    }
    return result;
};