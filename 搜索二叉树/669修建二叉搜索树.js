var trimBST = function (root, low, high) {
    if (!root) return null;

    root.left = trimBST(root.left, low, high);

    root.right = trimBST(root.right, low, high);

    if (root.val > high) return root.left;

    if (root.val < low) return root.right;
    
    return root;
};
