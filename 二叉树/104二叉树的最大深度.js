//DFS 同样参考100题思路 进行递归
var maxDepth = function (root) {
    if (!root) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
};
//BFS 参考101题
var maxDepth = function (root) {
    if (!root) return 0

    let queue = []

    let count = 0

    queue.push(root)

    while (queue.length) {
        let length = queue.length

        while (length--) {
            let node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        
        count++
    }
    return count
};