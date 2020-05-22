/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const gapSet = {};
    for (let pointer = 0; pointer < nums.length; pointer++) {
        const gap = target - nums[pointer];
        if (gapSet[gap] !== undefined) {
            return [gapSet[gap], pointer];
        }
        gapSet[nums[pointer]] = pointer;
    }
    return [];
};
// @lc code=end
