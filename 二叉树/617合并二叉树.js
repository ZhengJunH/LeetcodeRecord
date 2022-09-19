var mergeTrees = function (root1, root2) {
    if (!root1) return root2//如果一个节点不存在，返回另一棵树的节点

    if (!root2) return root1

    let newTree = new TreeNode(root1.val + root2.val)//新树的节点

    newTree.left = mergeTrees(root1.left, root2.left)//递归调用DFS对每一个节点进行相加

    newTree.right = mergeTrees(root2.right, root1.right)
    
    return newTree
};