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
        const res = [];
        let start = 0;
        for (let i = 0; i < S.length; i++) {
            maxInd = Math.max(maxInd, data.get(S[i]));

            if (maxInd === i) {
                res.push(i - start + 1);
                start = i + 1;
            }

        }

        return res;
    }
}
