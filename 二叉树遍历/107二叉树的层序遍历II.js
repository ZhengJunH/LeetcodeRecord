var levelOrder = function (root) {
    let result = []//答案记录器

    if (!root) return result

    const queue = []//BFS队列

    queue.push(root)//压栈

    while (queue.length) {
        let size = queue.length;//保存每一层长度

        result.push([])//对每一层压入一个数组

        for (let i = 1; i <= size; i++) {//遍历
            const childNode = queue.shift()//弹出栈顶元素

            result[result.length - 1].push(childNode.val)//得到结果数组

            if (childNode.left) queue.push(childNode.left)//压入子节点

            if (childNode.right) queue.push(childNode.right)
        }
    }

    return result.reverse()
}