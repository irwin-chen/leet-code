/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let str = s.join('');
    for (let i = 0; i < s.length; i++) {
        s[i] = str[str.length - 1 - i];
    }
};