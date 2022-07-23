/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x + '';
    let reverse = x.split('').reverse().join('');
    let res = (reverse === x) ?true :false
    return res;
};