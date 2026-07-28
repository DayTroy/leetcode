class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i; j < matrix[i].length; j++) {
                const temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for (let m of matrix) {
            m.reverse();
        }

        return matrix;
    }
}
