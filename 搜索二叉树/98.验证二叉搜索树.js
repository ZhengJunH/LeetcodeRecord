//中序遍历是否为递增序列
var isValidBST = function (root) {
    let min = -Infinity//设置最小值

    let res = true//初始为真

    const MidOrderTree = root => {
        if (!root) return false//到叶子节点还没满足条件

        MidOrderTree(root.left)//左子树遍历

        if (root.val <= min) res = false//如果不满足递增序列

        else min = root.val

        MidOrderTree(root.right)//右子树遍历
    }

    MidOrderTree(root)//递归

    return res//返回答案

};
