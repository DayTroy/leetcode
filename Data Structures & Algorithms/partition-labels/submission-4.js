class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const data = new Map();
        for (let i = 0; i < S.length; i++) {
            data.set(S[i], i);
        }

        const res = [];
        let startIndex = 0, endIndex = 0;

        for (let i = 0; i < S.length; i++) {
            endIndex = Math.max(endIndex, data.get(S[i]));

            if (i === endIndex) {
                res.push(endIndex - startIndex + 1);
                startIndex = i + 1;
            }
        }

        return res;
    }
}
