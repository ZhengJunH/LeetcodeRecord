var inorderTraversal = function (root) {
   
    let result = []//结果记录器

    const MiddleOrderTree = root => {
        
        if (root) {//如果存在此节点
            
            MiddleOrderTree(root.left)//先递归调用
            
            result.push(root.val)//后打印值
           
            MiddleOrderTree(root.right)
        }
    }

    MiddleOrderTree(root)

    return result
};