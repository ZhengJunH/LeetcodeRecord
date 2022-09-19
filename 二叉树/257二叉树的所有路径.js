var binaryTreePaths = function (root) {
    const paths = []//记录答案

    const getPath = (root, path) => {//DFS
        if (root) {//如果根节点不空，将其val值保存到路径

            path += root.val.toString()//路径上加上当前节点的val值

            if (root.left === null && root.right === null) {//如果是叶子节点
                paths.push(path)//将路径推入
            } else {//不是叶子节点
                path += '->'//连接符

                getPath(root.left, path)//左右递归
                
                getPath(root.right, path)
            }
        }
    }
   
    getPath(root, '')

    return paths//返回答案
};