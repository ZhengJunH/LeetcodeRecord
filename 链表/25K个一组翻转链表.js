
var reverseKGroup = function (head, k) {
    const getListLength = head => {//计算总长度的箭头函数
        let cur = head;
        let i = 0;
        while (cur) {
            cur = cur.next
            i++
        }
        return i;
    }
    const reserve = (pre, cur, k) => {//进行k此相邻两个节点的翻转
        while (--k) {
            let temp = cur.next
            cur.next = temp.next;
            temp.next = pre.next
            pre.next = temp
        }
    }
    let sumLength = getListLength(head)//计算总长度
    let Group = Math.floor(sumLength / k)//有几个k组
    let tail = new ListNode(-1)//记录初始信息
    tail.next = head;
    let pre = tail;//记录翻转头前一个节点
    let cur = pre.next//记录翻转头节点
    while (Group--) {
        reserve(pre, cur, k);//翻转成功后，头节点变成节结点
        pre = cur;//下一组的头前一个节点，为上一组翻转后的尾节点
        cur = cur.next
    }
    return tail.next//返回答案
};