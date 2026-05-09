class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let longest = 0, l = 0;
        const check = new Set();

        for (let r = 0; r < s.length; r++) {
            while (check.has(s[r])) {
                check.delete(s[l]);
                l++;
            }

            check.add(s[r]);

            longest = Math.max(longest, check.size);
        }

        return longest;
    }
}
