var preorderTraversal = function (root) {
    
    let result = []//结果记录器

    const preOrderTree = (root) => {
        if (root) {//如果存在此节点

            result.push(root.val)//先打印值

            preOrderTree(root.left)//递归调用

            preOrderTree(root.right)
        }

    }
    preOrderTree(root)

    return result
};