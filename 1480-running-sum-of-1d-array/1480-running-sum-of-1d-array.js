/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let arrOfSums = nums.map(x => {
        return sum += x;
    })
    return arrOfSums;
};