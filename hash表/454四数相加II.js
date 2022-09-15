
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const ABmap = new Map()//构建第一个数组和第二个数组的和哈希

    for (let i of nums1) {//将两个数组遍历
        for (let j of nums2) {
            if (ABmap.has(i + j)) {//构建键值对
                ABmap.set((i + j), ABmap.get(i + j) + 1)//统计合哈希数量
            }
            else {
                ABmap.set(i + j, 1)
            }
        }
    }
    let result = 0//答案变量

    for (let i of nums3) {//对第三个数组和第四个数组进行变量
        for (let j of nums4) {
            if (ABmap.has(-(i + j))) {//A[i]+B[j]===-C[i]+D[j]
                result += ABmap.get(-(i + j))//计算数量
            }
        }
    }
    return result
};