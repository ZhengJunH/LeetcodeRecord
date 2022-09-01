// 1.第一次相遇，slow = nb
// 2.a+nb = 入口点
// 3.slow再走a = 入口 = head走到入口 = a
// 4.由3得出，起始距离入口 = 第一次相遇位置 + a
var detectCycle = function (head) {
    let fast = head;//快慢指针

    let slow = head;


    while (slow && fast && fast.next) {//确保不会出现空的现象

        slow = slow.next;

        fast = fast.next.next;

        if (fast === slow) {//如果有环，快慢指针迟早相遇
            let ans = head;//记录答案

            while (ans != slow) {//慢指针会与头节点指针在环开始处相遇
                ans = ans.next;

                slow = slow.next

            }
            return ans
        }

    }
    return null//无结果，返回失败
};