var hasCycle = function (head) {
    let fast = head;//快慢指针

    let slow = head;

    while (slow && fast && fast.next) {//确保不会出现空的现象

        slow = slow.next;

        fast = fast.next.next;

        if (fast === slow) {//如果有环，快慢指针迟早相遇
            return true
        }

    }
    return false//无结果，返回失败
    //map记录
    var hasCycle = function (head) {
        const map = new Map()

        let cur = head

        while (cur) {
            if (map.get(cur)) return true

            else {
                map.set(cur, cur.val)

                cur = cur.next
            }
        }
        
        return false
    };
};