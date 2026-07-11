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
        let longest = 0;
        let maxF = 0;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const char = s[r];
            frequency.set(char, (frequency.get(char) || 0) + 1);
            maxF = Math.max(maxF, frequency.get(char));

            while (r - l - maxF + 1 > k) {
                frequency.set(s[l], frequency.get(s[l]) - 1);
                l++;
            }
            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
