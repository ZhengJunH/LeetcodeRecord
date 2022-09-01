
var getIntersectionNode = function (headA, headB) {
    let set = new Set()//设置哈希集合
    
    let curA = headA;//将A的每一项存储

    while (curA) {
        set.add(curA);

        curA = curA.next;

    }
    let curB = headB//从B中找
    while (curB) {

        if (set.has(curB)) return curB

        curB = curB.next
        
    }
    return null
};