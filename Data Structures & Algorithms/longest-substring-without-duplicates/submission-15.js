class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    // "zxyzxyz"
    // pwwkew
    lengthOfLongestSubstring(s) {
        let maxLong = 0, l = 0, check = new Set();

        for (let r = 0; r < s.length; r++) {
            while (check.has(s[r])) {
                check.delete(s[l]);
                l++;
            }
            check.add(s[r]);
            maxLong = Math.max(maxLong, check.size);
        } 

        return maxLong;
    }
}
