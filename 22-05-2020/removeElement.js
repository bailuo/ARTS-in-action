/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let pointer = 0;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val) {
            nums[pointer] = nums[index];
            pointer++;
        }
    }
    return pointer;
};
// @lc code=end
