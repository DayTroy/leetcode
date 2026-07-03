class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // "zxyzxyz"
    lengthOfLongestSubstring(s) {
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            let check = '';
            let long = 0;
            for (let j = i; j < s.length; j++) {
                if (check.includes(s[j])) break;
                check += s[j];
                long++;
            }
            longest = Math.max(longest, long);
        }

        return longest;
    }
}
