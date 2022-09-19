var buildTree = function(inorder, postorder) {
     // 退出递归条件   
    if(!inorder.length) return null

    let temp=postorder.pop()// // 根节点val值

    let mid=inorder.indexOf(temp)// 根节点在中序遍历中的下标

    let root=new TreeNode(temp)//根节点

    root.left=buildTree(inorder.slice(0,mid),postorder.slice(0,mid))

    root.right=buildTree(inorder.slice(mid+1),postorder.slice(mid))
    
    return root
};