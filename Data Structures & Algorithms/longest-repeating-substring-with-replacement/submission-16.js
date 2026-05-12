class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // "XYYX"

    // 

    characterReplacement(s, k) {
        let longest = 0;
        for (let i = 0; i < s.length; i++) {
            const frequency = new Map();
            let maxF = 0;
            for (let j = i; j < s.length; j++) {
                frequency.set(s[j], (frequency.get(s[j]) || 0) + 1);
                maxF = Math.max(maxF, frequency.get(s[j]));

                if (j - i + 1 - maxF <= k) {
                    longest = Math.max(longest, j - i + 1);
                }
            }
        }

        return longest;
    }
}
