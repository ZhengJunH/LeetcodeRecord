//递归
var deleteNode = function (root, key) {
    if (!root) return null//如果为空 返回null

    if (root.val > key) {//如果key小于根节点
        root.left = deleteNode(root.left, key)
        return root
    }

    if (root.val < key) {//如果key大于根节点
        root.right = deleteNode(root.right, key)
        return root
    }

    if (root.val === key) {//找到被删节点
        if (!root.left && !root.right) {//被删节点无子节点
            return null
        }

        if (!root.left) {//被删节点无左子节点
            return root.right
        }

        if (!root.right) {//被删节点无右子节点
            return root.left
        }

        //被删节点有左、右节点
        let deleteRight = root.right//在被删节点的右子树中找一个最小值代替被删节点

        while (deleteRight.left) {
            deleteRight = deleteRight.left
        }

        root.right = deleteNode(root.right, deleteRight.val)//删掉最小节点

        deleteRight.left = root.left//代替操作
        deleteRight.right = root.right

        return deleteRight//返回被删后重组过的节点
    }
    
    return root
};