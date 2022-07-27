/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let a = 0
        let b = 0;
        if (i === 0) {
          nums.slice(1).forEach(element => b += element);
        } else {
            nums.slice(0,i).forEach(element => a += element);
            nums.slice(i+1).forEach(element => b += element)
        }
        if (a === b) {
            return i;
        }
    }
    return -1;
};