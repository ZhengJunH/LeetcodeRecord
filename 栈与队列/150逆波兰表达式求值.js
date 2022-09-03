//中值表达式，只要理解什么是中值表达式，我认为为一道easy题
var evalRPN = function (tokens) {
    const stack = []//记录栈

    const Length = tokens.length//记录长度

    for (let i = 0; i < Length; i++) {

        const token = tokens[i]//记录每一个元素

        if (token >= -200 && token <= 200) {//判断是否为数字
            stack.push(parseInt(token))//入栈操作
        } 
        else {
            const pop2Number = stack.pop()//出栈，第一个出栈的为靠后的元素

            const pop1Number = stack.pop()

            if (token === '+') {//判断符号
                stack.push(pop1Number + pop2Number)
            } 
            else if (token === '-') {
                stack.push(pop1Number - pop2Number)
            } 
            else if (token === '*') {
                stack.push(pop1Number * pop2Number)
            } 
            else {
                stack.push(pop1Number / pop2Number > 0 ? Math.floor(pop1Number / pop2Number) : Math.ceil(pop1Number / pop2Number))
            }
        }
    }
    
    return stack.pop()//结果为最后一个数
};