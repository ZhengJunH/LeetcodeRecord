//深度优先搜索，对每个结点深度搜索，节点相同就继续搜索

//如果同时到底部，返回成功，且左右两边需要同时满足

var isSameTree = function (p, q) {
    if (p === null && q === null) return true//同时到底部

    if (p === null || q === null) return false//有一个节点不空，有一个节点为空
   
    if (p.val !== q.val) return false//如果值不相同

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    //递归调用，左右节点
    
};