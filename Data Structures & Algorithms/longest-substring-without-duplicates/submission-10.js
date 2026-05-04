class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let check = '', max = 0;

        for (let i = 0; i < s.length; i++) {
            check = '';
            for (let j = i; j < s.length; j++) {
                if (check.includes(s[j])) {
                    break;
                }
                check += s[j];
            }
            max = Math.max(max, check.length);
        }

        return max;
    }
}
