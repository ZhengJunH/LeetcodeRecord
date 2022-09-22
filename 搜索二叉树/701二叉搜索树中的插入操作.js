var insertIntoBST = function (root, val) {
    if (!root) {//到底 新建节点 插入
        root = new TreeNode(val)

        return root
    }

    if (root.val < val) {//递归
        root.right = insertIntoBST(root.right, val)
    }

    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    }
    
    return root
};