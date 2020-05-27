/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (37.22%)
 * Likes:    1012
 * Dislikes: 0
 * Total Accepted:    252.8K
 * Total Submissions: 678.2K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */

// @lc code=start

const longestCommonPrefixItem = (_item1, _item2) => {
    let result = '';
    const maxLen = Math.min(_item1.length, _item2.length);
    for (let index = 0; index < maxLen; index++) {
        if (_item1[index] !== _item2[index]) {
            break;
        }
        result += _item1[index];
    }
    return result;
};

const longestCommonPrefixList = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    const midLen = Math.floor(arr.length / 2);
    const leftList = arr.slice(0, midLen);
    const rightList = arr.slice(midLen, arr.length);
    return longestCommonPrefixItem(
        longestCommonPrefixList(leftList),
        longestCommonPrefixList(rightList)
    );
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return '';
    return longestCommonPrefixList(strs);
};

// @lc code=end
