var sumOfLeftLeaves = function (root) {
    let addSum = 0//记录合

    const getLeftval = root => {
        if (root === null) return//终止条件

        if (root.left && !root.left.left && !root.left.right) {//判断条件
            addSum += root.left.val//得到左叶子节点的值
        }

        getLeftval(root.left)//递归调用

        getLeftval(root.right)
    }

    getLeftval(root)
    
    return addSum
};