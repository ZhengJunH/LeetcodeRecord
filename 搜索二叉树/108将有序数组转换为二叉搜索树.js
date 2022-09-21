//中序遍历递归，找到中级节点为根节点，生成的二叉树为平衡二叉树
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null//如果为空，返回null

    const Midnum = Math.floor(nums.length / 2)//找到中间值

    let head = new TreeNode(nums[Midnum])//创建为节点

    let left = Midnum - 1//二分查找的左 右边界

    let right = Midnum + 1//二分查找的右 左边界

    if (left >= 0) head.left = sortedArrayToBST(nums.slice(0, Midnum))//满足条件

    if (right <= nums.length) head.right = sortedArrayToBST(nums.slice(right))

    return head
};