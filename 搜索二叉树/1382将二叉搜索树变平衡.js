//先中序遍历得到有序数组 构建以中间节点为根节点的二叉树
var balanceBST = function (root) {
    let nums = []

    const getMidOrder = root => {
        if (!root) return null

        getMidOrder(root.left)

        nums.push(root.val)

        getMidOrder(root.right)

    }

    getMidOrder(root)

    const getBalanceBST = nums => {
        if (!nums.length) return null

        let middleNode = Math.floor(nums.length / 2)

        let newNode = new TreeNode(nums[middleNode])

        if (middleNode >= 1) newNode.left = getBalanceBST(nums.slice(0, middleNode))

        if (middleNode <= nums.length - 1) newNode.right = getBalanceBST(nums.slice(middleNode + 1))
        
        return newNode
    }
    
    return getBalanceBST(nums)
};