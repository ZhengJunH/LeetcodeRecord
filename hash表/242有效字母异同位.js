
var isAnagram = function (s, t) {

    const getAsciiLocation = (str) => {//判断每一个字符串

        let array = new Array(26).fill(0)//填充26个位全0

        for (let i = 0; i < str.length; i++) {//遍历字符串

            let ascii = str[i].charCodeAt() - 97//求ASCII编码

            array[ascii]++//在对应位置上计数++

        }

        return array.join('')
        //返回位字符串形式，因为如果为数组则比较的是地址，而不是内容
    }

    return getAsciiLocation(s) === getAsciiLocation(t)//判断是否相等
};