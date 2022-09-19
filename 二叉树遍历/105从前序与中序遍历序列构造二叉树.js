var buildTree = function(preorder, inorder) {
    // 退出递归条件
    if (!inorder.length) {
      return null
    }

    let temp = preorder[0]  // 根节点

    let mid = inorder.indexOf(temp) // 根节点在中序遍历中的下标

    let root = new TreeNode(temp)
    // 根在中序的mid，那左子树个数就有mid个

    // 前序里截取从第1个到第mid+1个是左子树，中序里第0个到第mid个是左子树
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))

    // 前序里截取从第mid+1个到最后是右子树，中序里第mid个到最后是右子树
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    
    return root
  
  };
  