//递归
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head;
    }//判断返回条件
    const nextList = reverseList(head.next)//得到最后一个节点

    head.next.next = head;//调转方向

    head.next = null//设置下一个指向为空

    return nextList
};

//迭代
var reverseList = function (head) {
    let prev = null;//反转链表节点

    let temp = head;//记录节点

    while (temp) {
        const cur = temp.next;

        temp.next = prev;

        prev = temp;

        temp = cur
        
    }
    return prev
};