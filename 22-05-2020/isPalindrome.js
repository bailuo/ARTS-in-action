/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 *
 * 11509/11509 cases passed (224 ms)
 * Your runtime beats 72.27 % of javascript submissions
 * Your memory usage beats 64 % of javascript submissions (45.7 MB)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const targetStr = x.toString();
    if (targetStr.length === 1) {
        return true;
    }
    const numArr = targetStr.split('');
    while (numArr.length > 1) {
        if (numArr[0] !== numArr[numArr.length - 1]) {
            return false;
        }
        numArr.pop();
        numArr.shift();
    }
    return true;
};

// @lc code=end
