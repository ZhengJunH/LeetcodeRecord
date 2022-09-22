var isBalanced = function (root) {
    // 声明一个变量保存平衡状态
    let isBalanced = true
    // 从根结点开始递归遍历
    function checkBanlance(node, level) {
        // 如果节点为空直接返回level
        if (node === null) return level

        // 递归遍历左节点，获取其level值，检查是否平衡
        let left = checkBanlance(node.left, level + 1)

        // 如果平衡状态为false直接返回
        if (!isBalanced) {
            return left
        }

        // 递归遍历右节点，获取其level值，检查是否平衡
        let right = checkBanlance(node.right, level + 1)

        // 如果平衡状态为false直接返回
        if (!isBalanced) {
            return right
        }

        // 检测左右level平衡是否超过1，超过1更改平衡状态
        if (Math.abs(left - right) > 1) isBalanced = false

        // 返回最大的level值
        return Math.max(left, right)

    }

    checkBanlance(root, 0)

    return isBalanced
};
