var postorderTraversal = function (root) {
    
    let result = []

    const LastOrderTree = root => {

        if (root) {
            LastOrderTree(root.left)

            LastOrderTree(root.right)

            result.push(root.val)
        }
    }

    LastOrderTree(root)

    return result
};