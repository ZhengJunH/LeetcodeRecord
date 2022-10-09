var lemonadeChange = function (bills) {
    let five = 0//5元数

    let ten = 0//10元数

    for (let bill of bills) {//最简单的逻辑判断
        if (bill === 5) {
            five++
        } 
        else if (bill === 10) {
            if (five === 0) return false
            five--
            ten++
        } 
        else {
            if (five > 0 && ten > 0) {
                five--
                ten--
            } 
            else if (five >= 3) {
                five -= 3
            }
             else {
                return false
            }
        }
    }

    return true

};