var invertTree = function (root) {

    if (root === null) return null

    let temp = root.left//简单的交换
    root.left = root.right
    root.right = temp

    invertTree(root.left)//递归执行左右节点交换

    invertTree(root.right)

    return root//返回根节点
};