//DFS
var isSymmetric = function (root) {
    const BfsTree = function (root1, root2) {//参考100题相同思路
        if (root1 === null && root2 === null) return true

        if (root1 === null || root2 === null) return false

        if (root1.val !== root2.val) return false

        return BfsTree(root1.left, root2.right) && BfsTree(root1.right, root2.left)
        //差别处
    }
    return BfsTree(root, root)
};

//递归迭代 BFS 广度
var isSymmetric = function (root) {
    if (root === null) return true//如果为空 返回true

    let queue = []//记录队列

    queue.push(root.left, root.right)//将根节点的子节点压入队列
   
    while (queue.length) {//队列长度不为空
        
        let queue1 = queue.shift()//出队列，并且得到出队列的元素
        
        let queue2 = queue.shift()//同上
       
        if (!queue1 && !queue2) continue;//如果都为空，继续执行，这是与上述DFS区别的地方
        
        if (!queue1 || !queue2) return false;
        
        if (queue1.val !== queue2.val) return false;
        
        queue.push(queue1.left, queue2.right)
        
        queue.push(queue2.left, queue1.right)
    }

    return true
};