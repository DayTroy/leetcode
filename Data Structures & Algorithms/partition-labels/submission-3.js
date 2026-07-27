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
        
        let maxInd = 0;
        let start = 0;
        const res = [];
        for (let i = 0; i < S.length; i++) {
            maxInd = Math.max(maxInd, data.get(S[i]));

            if (i === maxInd) {
                res.push(i - start + 1);
                start = i + 1;
            }
        }

        return res
    }
}
