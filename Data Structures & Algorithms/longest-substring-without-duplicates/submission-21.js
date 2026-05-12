class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let longest = 0;

        for (let i = 0; i < s.length; i++) {
            let check = '';

            for (let j = i; j < s.length; j++) {
                if (check.includes(s[j])) break;
                check += s[j];
            }

            longest = Math.max(longest, check.length);
        }

        return longest
    }
}
