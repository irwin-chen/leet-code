/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const sumList = [nums[0]];
    
    for (let i = 1; i < nums.length; i++) {
        sumList.push(nums[i]+sumList[i-1]);
    }
    return sumList;
};