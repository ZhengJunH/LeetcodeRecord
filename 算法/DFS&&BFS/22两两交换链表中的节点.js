var swapPairs = function (head) {
    if (!head || !head.next) return head;//有一个为空 则之间返回

    let firstNode = head//记录头节点

    let newNode = head.next//头节点的下一个节点

    //
    firstNode.next = swapPairs(newNode.next)
    //第二个节点的下一个节点为下一组两两交换的头节点 所以传入

    newNode.next = firstNode//接入转换后的节点

    return newNode
};