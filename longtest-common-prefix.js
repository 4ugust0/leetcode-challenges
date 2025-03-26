/**
 Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".



 Example 1:

 Input: strs = ["flower","flow","flight"]
 Output: "fl"
 Example 2:

 Input: strs = ["dog","racecar","car"]
 Output: ""
 Explanation: There is no common prefix among the input strings.


 Constraints:

 1 <= strs.length <= 200
 0 <= strs[i].length <= 200
 strs[i] consists of only lowercase English letters if it is non-empty.

 */


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var _pre_ = strs[0]

    for(let i=0;i<strs.length;i++) {
        while(strs[i].indexOf(_pre_) != 0) {
            _pre_=_pre_.substring(0, _pre_.length-1)
        }
    }
    return _pre_
};