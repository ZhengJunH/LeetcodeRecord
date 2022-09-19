var minDepth = function (root) {
    if (!root) return 0
    const FindDepth = (node, level) => {
        const length = level + 1//当前的深度+1、

        // 左右节点都没有，则返回当前层级
        if (!node.left && !node.right) return length

        // 有左子树，没有右子树，返回左子树深度
        if (!node.right && node.left) return FindDepth(node.left, length)

        // 有右子树，没有左子树，返回右子树深度
        if (!node.left && node.right) return FindDepth(node.right, length)
       
        // 左右子树都有，则取左、右子树层深的最小值
        return Math.min(FindDepth(node.left, length), FindDepth(node.right, length))
    }
    return FindDepth(root, 0)
};