//中序遍历 递增序列，两两之间差值最小为答案
var getMinimumDifference = function (root) {
    let pre = -1//记录前一个root值

    let ans = Infinity//答案

    const MidOrderTree = root => {
        if (!root) return null

        MidOrderTree(root.left)

        if (pre == -1) {
            pre = root.val
        } 
        else {
            ans = Math.min(ans, root.val - pre)
            pre = root.val
        }

        MidOrderTree(root.right)
    }

    MidOrderTree(root)

    return ans
    
};