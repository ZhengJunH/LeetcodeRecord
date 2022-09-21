var findMode = function (root) {
    let base = 0;//记录遍历到的root.val值

    let count = 0;//计数

    let maxCount = 0;//最大个数

    let answer = []

    const update = x => {
        if (x === base) {//记录每个数的个数
            count++
        } else {
            count = 1;
            base = x
        }

        if (count === maxCount) {//如果与目前最大值相等
            answer.push(base)
        }

        if (count > maxCount) {//如果大于目前的最大值
            maxCount = count
            answer = [base]
        }

    }
    //DFS中序遍历
    const MidOrderDfs = root => {
        if (!root) return null

        MidOrderDfs(root.left)

        update(root.val)

        MidOrderDfs(root.right)

    }

    MidOrderDfs(root)
    
    return answer
};