class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let l = 0;
        const data = new Set();
        for (let r = l; r < s.length; r++) {
            while (data.has(s[r])) {
                data.delete(s[l]);
                l++;
            }
            data.add(s[r]);
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
