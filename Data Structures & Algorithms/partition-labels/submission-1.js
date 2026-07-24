class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const frequency = new Map();

        for (let i = 0; i < S.length; i++) {
            frequency.set(S[i], i);
        }

        let maxEnd = 0;
        const res = [];

        let start = 0;
        for (let i = 0; i < S.length; i++) {
            maxEnd = Math.max(maxEnd, frequency.get(S[i]));

            if (i === maxEnd) {
                res.push(i - start + 1)
                start = i + 1;
            }
        }

        return res;
    }
}
