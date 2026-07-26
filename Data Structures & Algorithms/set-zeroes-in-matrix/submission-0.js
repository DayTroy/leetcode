class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const zeroRows = new Set();
        const zeroCols = new Set();
        const rows = matrix.length;
        const cols = matrix[0].length;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (matrix[i][j] === 0) {
                    zeroRows.add(i);
                    zeroCols.add(j);
                }
            }
        }

        for (let r of zeroRows) {
            matrix[r].fill(0);
        }

        for (let c of zeroCols) {
            for (let i = 0; i < rows; i++) {
                matrix[i][c] = 0;
            }
        }

        return matrix;
    }
}
