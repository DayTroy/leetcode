class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // "XYYX", k = 2
    // set = X,Y
    characterReplacement(s, k) {
        const setik = new Set(s);
        let maxLen = 0;

        for (let char of setik) {
            let count = 0;
            let l = 0;

            for (let r = 0; r < s.length; r++) {
                if (s[r] === char) {
                    count++;
                }

                while (r - l + 1 - count > k) {
                    if (s[l] === char) {
                        count--;
                    }
                    l++;
                }

                maxLen = Math.max(maxLen, r - l + 1);
            }
        }

        return maxLen;
    }
}
