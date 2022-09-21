//递归 因为是二叉搜索树 有它的特殊性
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null

    if (root.val < p.val && root.val < q.val)//如果p,q都比根节点大，则递归右子树
        return lowestCommonAncestor(root.right, p, q)

    if (root.val > p.val && root.val > q.val)//如果p,q都比根节点小，则递归左子树
        return lowestCommonAncestor(root.left, p, q)

    else return root//如果p小于根节点，q大于根节点 直接返回根节点
    
};