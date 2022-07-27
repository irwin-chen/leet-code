/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let a = 0
        let b = 0;
        if (i === 0) {
            b = nums.slice(1).reduce((p,c) => p+c,0);
        } else {
            a = nums.slice(0,i).reduce((p,c) => p+c,0);
            b = nums.slice(i+1).reduce((p,c) => p+c,0);
        }
        if (a === b) {
            return i;
        }
    }
    return -1;
};