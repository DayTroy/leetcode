class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // "XYYX", k = 2
    // set = X,Y
    characterReplacement(s, k) {
        let maxRepeatedLength = 0;

        for (let i = 0; i < s.length; i++) {
            const frequency = new Map();
            let maxF = 0;

            for (let j = i; j < s.length; j++) {
                frequency.set(s[j], (frequency.get(s[j]) || 0) + 1);

                maxF = Math.max(maxF, frequency.get(s[j]));
                if (j - i + 1 - maxF <= k) {
                    maxRepeatedLength = Math.max(maxRepeatedLength, j - i + 1);
                }
            }
        }

        return maxRepeatedLength
    }
}
