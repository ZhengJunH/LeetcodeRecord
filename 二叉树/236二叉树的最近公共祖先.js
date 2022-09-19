var lowestCommonAncestor = function (root, p, q) {

    const getGradefather = (node, p, q) => {//递归
        if (node === null || node === p || node === q) {//找到p或者q或者节点为空则为停止条件
            return node
        }

        let left = getGradefather(node.left, p, q)//在左边找q或p

        let right = getGradefather(node.right, p, q)//在右边找p或q

        if (left !== null && right !== null) {//如果左右都能找得到，则祖先节点为左右节点的根节点
            return node
        }

        if (left === null) {//如果左边找不到，则去右边找
            return right
        }
        
        return left//同理
    }
    return getGradefather(root, p, q)
};