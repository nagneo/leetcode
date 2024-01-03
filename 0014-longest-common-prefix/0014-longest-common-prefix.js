/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = strs[0];
    for (var i = 1; i < strs.length; i++ ) {
        let current = ''
        for (var j = 0; j < result.length; j++) {
            if (strs[i].length <= j) {
                result = current;
                break;
            }
            if (result[j] === strs[i][j]) {
                current += result[j]; 
            }
            else {
                result = current;
                break;
            }
        }
    }
    return result;
};