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
            const freq = new Map();
            let maxFrequency = 0;

            for (let j = i; j < s.length; j++) {
                freq.set(s[j], (freq.get(s[j]) || 0) + 1);

                maxFrequency = Math.max(maxFrequency, freq.get(s[j]));

                if (j - i + 1 - maxFrequency <= k) {
                    longest = Math.max(longest, j - i + 1);
                }
            }
        }

        return longest
    }
}
