class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let maxlong = 0, check = new Set(), l = 0;
        for (let r = 0; r < s.length; r++) {
            while (check.has(s[r])) {
                check.delete(s[l]);
                l++;
            }
            check.add(s[r]);
            maxlong = Math.max(maxlong, check.size);
        }
        return maxlong;
    }
}
