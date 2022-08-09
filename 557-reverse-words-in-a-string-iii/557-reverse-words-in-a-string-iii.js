/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(' ');
    let reverse = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = str[i].length - 1; j >= 0; j--) {
            reverse += str[i][j];
        }
        reverse += ' ';
    }
    return reverse.trim();
};