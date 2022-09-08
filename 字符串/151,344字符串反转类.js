//344
var reverseString = function(s) {
    return s.reverse()
 };//不调用APT，则正常为交换首位，最简单的双指针
 
 //151
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
    };