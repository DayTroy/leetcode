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
        let longest = 0;

        for (let i = 0; i < s.length; i++) {
            const frequency = new Map();
            for (let j = i; j < s.length; j++) {
                frequency.set(s[j], (frequency.get(s[j]) || 0) + 1);
                const maxFreq = Math.max(...Array.from(frequency.values()));

                if (j - i + 1 - maxFreq  > k) break;
                else {
                    longest = Math.max(longest, j - i + 1);
                }
            }
        }

        return longest;
    }
}
