//每一层的最右节点，与层序遍历相似，将最后一个节点val压入答案栈
var rightSideView = function (root) {
    let result = []

    if (!root) return []

    const queue = []

    queue.push(root)

    while (queue.length) {
        let size = queue.length

        for (let i = 1; i <= size; i++) {
            const childNode = queue.shift()

            if (i === size) result.push(childNode.val)

            if (childNode.left) queue.push(childNode.left)

            if (childNode.right) queue.push(childNode.right)
        }
    }
    
    return result
};