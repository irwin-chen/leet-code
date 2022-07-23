/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x + '';
    let reverse = x.split('');
    for (let i = 0; i < reverse.length; i++) {
        if (x[i] !== reverse[reverse.length-i-1]) {
            return false;
        }
    }
    return true;
};