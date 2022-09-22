//逆序中序遍历 将每个节点累加 得到sum 再赋回节点值
var convertBST = function (root) {
    let sum = 0

    const reserveOrder = root => {
        if (!root) return null

        reserveOrder(root.right)

        sum += root.val
        root.val = sum

        reserveOrder(root.left)

    }

    reserveOrder(root)

    return root
};
//morris遍历
var convertBST = function (root) {
    let sum = 0

    if (!root) return null

    let node = root//记录根节点

    while (node) {
        let lNode = node.right;//如果有右子树

        if (node.right) {//在右子树中找最左节点
            while (lNode.left && lNode.left !== node) {
                lNode = lNode.left
            }

            if (!lNode.left) {//最左节点的左指针为空
                lNode.left = node;
                node = node.right//向右移动
                continue
            }
            else {
                lNode.left = null//有左指针，将左指针设为0
            }

        }
        sum += node.val//对于只能到达一次的节点直接改变val，对于能到达第二次的节点，第二次改变val
        
        node.val = sum

        node = node.left//否则向左移动
    }
    
    return root
};