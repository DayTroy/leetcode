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
        const data = new Map();
        let longest = 0;
        let l = 0;
        let maxF = 0;
        for (let r = 0; r < s.length; r++) {
            data.set(s[r], (data.get(s[r]) || 0) + 1);
            maxF = Math.max(maxF, data.get(s[r]));

            while (r - l + 1 - maxF > k) {
                data.set(s[l], data.get(s[l]) - 1);
                l++;
            }

            longest = Math.max(longest, r - l + 1);
            
        }

        return longest;
    }
}
