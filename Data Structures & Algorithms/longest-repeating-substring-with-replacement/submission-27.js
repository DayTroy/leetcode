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
        // const frequency = new Map();
        let longest = 0;
        // for (let char of s) {
        //     frequency.set(char, (frequency.get(char) || 0) + 1);
        // }

        for (let i = 0; i < s.length; i++) {
            const frequency = new Map();
            let maxF = 0;
            for (let j = i; j < s.length; j++) {
                const char = s[j];
                frequency.set(char, (frequency.get(char) || 0) + 1);
                maxF = Math.max(maxF, frequency.get(char));

                if (j - i - maxF + 1 <= k) {
                    longest = Math.max(longest, j - i + 1);
                }
            }
        }

        return longest;
    }
}
