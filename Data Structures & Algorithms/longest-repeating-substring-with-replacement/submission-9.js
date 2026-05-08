class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // "XYYX", k = 2
    // set = X,Y
    characterReplacement(s, k) {
        const frequency = new Map();
        let maxLen = 0, l = 0, maxF = 0, count = 0;

        for (let r = 0; r < s.length; r++) {
            frequency.set(s[r], (frequency.get(s[r]) || 0) + 1);

            maxF = Math.max(maxF, frequency.get(s[r]));
            
            while (r - l + 1 - maxF > k) {
                frequency.set(s[l], frequency.get(s[l]) - 1);
                l++;
            }

            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;

    }
}
