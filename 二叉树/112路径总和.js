var hasPathSum = function (root, targetSum) {

    const getaddSum = (node, addSum) => {//计算和函数
        
        if (!node) return false//如果节点到空了，说明此时为叶子节点，还没有成功，则返回失败
        
        if (node.val + addSum === targetSum && !node.left && !node.right) return true//判断是否成功的条件
        
        return getaddSum(node.left, node.val + addSum) || getaddSum(node.right, node.val + addSum)//递归DFS
    }
    
    return getaddSum(root, 0)
};