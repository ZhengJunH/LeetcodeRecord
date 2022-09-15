var intersection = function (nums1, nums2) {
    
    let set = new Set(nums1)//将第一个数组设为哈希集合
   
    let resultSet = new Set()//构建答案哈希集合（不重复）
    
    for (let temp of nums2) {//对于第二个数组的每一个元素
        
        if (set.has(temp)) {//如果在哈希集合中有
            resultSet.add(temp)//添加到答案哈希集合
        }

    }

    return [...resultSet]//结构为数组
}