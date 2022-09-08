
var isHappy = function (n) {
    const getNext = n => {//计算传入数据的每一位平方和
        let sum = 0;
       
        let str = n.toString();
        
        for (let i = 0; i < str.length; i++) {
            sum += Math.pow(parseInt(str[i]), 2);
        }
       
        return sum;
    }
    //2  
    const getNext = n => {
        let sum = 0;
        
        while (n > 0) {
            sum += Math.pow(n % 10, 2)
            n = Math.floor(n / 10)
        }
       
        return sum;
    }

    let slow = n, fast = getNext(n);//初始值
    
    while (fast != 1 && slow !== fast) {//快慢指针，如果不到1，则指针会重合
       
        slow = getNext(slow)
        
        fast = getNext(getNext(fast))
    }

    return fast === 1


};