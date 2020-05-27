#### First Version

118/118 cases passed (68 ms)
Your runtime beats 80.03 % of javascript submissions
Your memory usage beats 6.06 % of javascript submissions (37.4 MB)

```js
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let result = '';
    let maxLength = Math.min(...strs.map((_str) => _str.length));
    let baseline = strs[0];
    let comparisonGroup = strs.slice(1);
    while (comparisonGroup.length) {
        const headEle = comparisonGroup.shift();
        let pointer = 0;
        result = '';
        while (headEle && pointer < maxLength) {
            if (baseline[pointer] === headEle[pointer]) {
                result += baseline[pointer];
                pointer++;
                continue;
            }
            maxLength = pointer + 1;
            baseline = result;
            break;
        }
    }
    return result;
};
```

#### Second Version

做了一点改动，没有去一直计算 comparisonGroup.length 但是效率反而降低了

118/118 cases passed (76 ms)
Your runtime beats 46.29 % of javascript submissions
Your memory usage beats 6.06 % of javascript submissions (37.6 MB)

```js
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    let result = '';
    let maxLength = Math.min(...strs.map((_str) => _str.length));
    let baseline = strs[0];
    let comparisonGroup = strs.slice(1);
    while (comparisonGroup.length) {
        const headEle = comparisonGroup[0];
        let pointer = 0;
        result = '';
        while (headEle && pointer < maxLength) {
            if (baseline[pointer] === headEle[pointer]) {
                result += baseline[pointer];
                pointer++;
                continue;
            }
            maxLength = pointer + 1;
            baseline = result;
            break;
        }
        comparisonGroup = comparisonGroup.slice(1);
    }
    return result;
};
```

#### Third Version

上面的方法相当于都是暴力破解，尽管小的地方可能有优化空间，但是思路上改变才能有比较大的改善。去官方网站上学习了一下别人的做法。也尝试使用一下二分的思路。结果空间占用没减小，时间还拖的更长了。

118/118 cases passed (84 ms)
Your runtime beats 22.66 % of javascript submissions
Your memory usage beats 6.06 % of javascript submissions (38.2 MB)

```js
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
```
