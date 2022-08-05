/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let check = t;
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        if (check.includes(s[i])) {
            check = check.replace(s[i],'');
        } else {
            return false;
        }
    }
    return true
};