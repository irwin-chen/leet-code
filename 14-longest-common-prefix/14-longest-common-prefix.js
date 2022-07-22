/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let long = 0;
    let word;
    let prefix = '';
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > long) {
            long = strs[i].length;
            word = strs[i];
        }
    }
    if (!word) {
        return prefix;
    }
    for (let i = 0; i < word.length; i++) {
        prefix += word[i];
        for (let j = 0; j < strs.length; j++) {
            if (!strs[j].startsWith(prefix)) {
                prefix = prefix.slice(0,i)
                return prefix;
            }
        }
    }
    return prefix;
};