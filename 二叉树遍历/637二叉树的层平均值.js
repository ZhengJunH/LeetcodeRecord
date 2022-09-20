var averageOfLevels = function (root) {
    let result = []//答案记录器

    if (!root) return result

    const queue = []//BFS队列

    queue.push(root)//压栈

    while (queue.length) {
        let size = queue.length;//保存每一层长度
        
        let orderSum = 0

        for (let i = 1; i <= size; i++) {
            const childNode = queue.shift()

            orderSum += childNode.val

            if (childNode.left) queue.push(childNode.left)

            if (childNode.right) queue.push(childNode.right)
        }

        result.push(orderSum / size)
    }
    
    return result
};