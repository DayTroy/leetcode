class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows = new Set();
        const cols = new Set();

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] === 0) {
                    rows.add(i);
                    cols.add(j);
                }
            }
        }

        for (let row of rows) {
            matrix[row].fill(0);
        }

        for (let col of cols) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][col] = 0;
            }
        }

        return matrix;
    }
}
