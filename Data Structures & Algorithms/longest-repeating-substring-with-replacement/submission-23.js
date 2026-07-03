class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    //  "XYYX"
    // X: 1
    // Y: 1

    characterReplacement(s, k) {
        const frequency = new Map();
        let l = 0;
        let longest = 0;
        let maxF = 0;

        for (let r = 0; r < s.length; r++) {
            frequency.set(s[r], (frequency.get(s[r]) || 0) + 1);
            maxF = Math.max(maxF, frequency.get(s[r]));

            while (r - l + 1 - maxF > k) {
                frequency.set(s[l], frequency.get(s[l]) - 1);
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
