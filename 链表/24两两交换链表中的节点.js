
var swapPairs = function (head) {
    //迭代
    let tail = new ListNode(-1);//记录头，交换过程中不被破坏

    tail.next = head;
    let dummy = tail//设置一个交换变量

    while (dummy.next && dummy.next.next) {//可以交换的条件
        const node1 = dummy.next;//设置第一个交换节点

        const node2 = dummy.next.next;//设置第二个交换节点

        node1.next = node2.next;//代码逻辑

        node2.next = node1;

        dummy.next = node2;//设置初始指针指向的位置，保证有序
        
        dummy = node1;
    }
    return tail.next//返回结果
    //递归
    if (!head || !head.next) return head;//如果无法交换，则直接返回头节点

    const newhead = head.next//记录原来链表的第二个节点

    head.next = swapPairs(newhead.next)//递归交换节点

    newhead.next = head//第二个节点为新链表的第一个节点

    return newhead//返回结果
};