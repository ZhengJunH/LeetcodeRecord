
var removeNthFromEnd = function (head, n) {
    if (!head.next) return head.next //如果只有表头，返回表头
    let slow = head;//确定快慢指针
    let fast = head;
    while (n > 0 && fast) { //让快指针停下
        fast = fast.next
        n--
    }
    if (!fast) return head.next//快指针如果停下时，为表尾，则删除的元素为第一个元素
    while (fast.next) {//通过慢指针找到要删除结点的位置
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next//删除结点
    return head
};