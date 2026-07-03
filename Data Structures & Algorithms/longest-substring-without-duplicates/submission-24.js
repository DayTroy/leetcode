class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        const check = new Set();
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            while (check.has(s[r])) {
                check.delete(s[l]);
                l++;
            }
            check.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
