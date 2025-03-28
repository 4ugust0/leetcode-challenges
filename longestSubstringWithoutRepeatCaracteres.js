/**
 Given a string s, find the length of the longest substring without duplicate characters.



 Example 1:

 Input: s = "abcabcbb"
 Output: 3
 Explanation: The answer is "abc", with the length of 3.
 Example 2:

 Input: s = "bbbbb"
 Output: 1
 Explanation: The answer is "b", with the length of 1.
 Example 3:

 Input: s = "pwwkew"
 Output: 3
 Explanation: The answer is "wke", with the length of 3.
 Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


 Constraints:

 0 <= s.length <= 5 * 104
 s consists of English letters, digits, symbols and spaces.

 * */

/**
 * @param {string} s
 * @return {number}
 */

// This is my solution
var lengthOfLongestSubstring = function(s) {
    let charIndex = {};
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (charIndex[s[i]] >= start) {
            start = charIndex[s[i]] + 1;
        }
        charIndex[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
};
