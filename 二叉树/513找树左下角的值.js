//层序遍历
var findBottomLeftValue = function (root) {
    let res = -1//记录最下最左节点的值

    let queue = []//初始队列

    queue.push(root)

    while (queue.length) {
        let size = queue.length//保证遍历时变量不会改变

        for (let i = 0; i < size; i++) {
            let node = queue.shift()//取出栈顶元素，则为当前层序最左边的值

            if (i === 0) res = node.val//第一个值为最左边的值
            if (node.left) queue.push(node.left)//入队
            if (node.right) queue.push(node.right)

        }
    }

    return res
};
//递归DFS
var findBottomLeftValue = function (root) {
    let maxDepth = 0;//记录最大深度

    let res = null//记录节点

    let depth = 0//遍历到的深度

    const getLowestLeft = root => {
        if (root === null) return null//到底
        
        depth++//深度++

        if (depth > maxDepth) {
            maxDepth = depth;//保存节点
            res = root
        }

        getLowestLeft(root.left)//递归

        getLowestLeft(root.right)
        depth--//回溯
    }
    
    getLowestLeft(root)

    return res.val
};