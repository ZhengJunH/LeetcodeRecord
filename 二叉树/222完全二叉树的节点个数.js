var countNodes = function (root) {
    if (!root) return 0 //是否根节点为空

    let count = 1//计数量

    const getNodenum = (node) => {//计算节点个数

        if (node.left) {
            count++;
            getNodenum(node.left)
        }

        if (node.right) {//递归
            count++;
            getNodenum(node.right)
        }

    }
    getNodenum(root);

    return count;
};