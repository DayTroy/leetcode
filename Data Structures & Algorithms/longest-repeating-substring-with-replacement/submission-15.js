class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // "XYYX"

    // 

    characterReplacement(s, k) {
        const freq = new Map();
        let longest = 0, l = 0, maxFrequency = 0;;

        for (let r = 0; r < s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, freq.get(s[r]));

            while (r - l + 1 - maxFrequency > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
