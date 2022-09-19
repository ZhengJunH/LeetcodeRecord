//递归DFS
var constructMaximumBinaryTree = function (nums) {
    const fn = (nums, left, right) => {
        if (left > right) return null//当l=r的时候就找到最底层的节点

        let best = left//记录左值，先把他当作最大值

        for (let i = left + 1; i <= right; i++) {
            if (nums[i] > nums[best]) {
                //找到最大值
                best = i
            }
        }

        const root = new TreeNode(nums[best])//构建节点

        root.right = fn(nums, best + 1, right)//递归调用

        root.left = fn(nums, left, best - 1)

        return root//返回根节点
    }

    return fn(nums, 0, nums.length - 1)
};
//单调栈
var constructMaximumBinaryTree = function (nums) {

    nums.push(10001)//哨兵元素，找的到构建成功树的根节点

    const stack = []//初始栈

    for (let i = 0; i < nums.length; i++) {//对每个节点进行遍历

        let curNode = new TreeNode(nums[i])//每一个栈中元素都是树的一个节点

        while (stack.length && stack[stack.length - 1].val < curNode.val) {//如果栈不空且栈顶元素小于当前节点
            
            const ChildrenNode = stack.pop()//出栈作为子节点

            if (!stack.length || stack[stack.length - 1].val > curNode.val) {//如果当前栈为空或者栈顶元素大于当前元素
                curNode.left = ChildrenNode//当前元素的左子节点为子节点

            } else {//栈顶节点的右节点为子节点
                stack[stack.length - 1].right = ChildrenNode
            }

        }

        stack.push(curNode)//每个节点都要压栈
    }

    return stack[0].left//返回的根节点

};
