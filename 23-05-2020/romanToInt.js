/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const numberMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const arr = s.split('');
    let result = 0;
    for (let index = 0; index < arr.length; index++) {
        result += numberMap[arr[index]];
        if (index > 0 && numberMap[arr[index]] > numberMap[arr[index - 1]]) {
            result -= 2 * numberMap[arr[index - 1]];
        }
    }
    return result;
};
// @lc code=end
