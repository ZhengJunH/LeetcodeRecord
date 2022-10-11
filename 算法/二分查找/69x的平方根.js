var mySqrt = function (x) {
    //x的平方根不会大于x/2+1
    if (x < 2) return x;

    let left = 1
    let right = Math.floor(x / 2)

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (mid * mid === x) return mid

        if (mid * mid < x) {
            left = mid + 1
        } 
        else {
            right = mid - 1
        }
    }

    return right
    
};