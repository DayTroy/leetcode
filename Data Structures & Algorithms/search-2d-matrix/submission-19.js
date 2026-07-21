class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let rows = matrix.length;
        let cols = matrix[0].length;
        let r = rows * cols - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            const midValue = matrix[Math.floor(m / cols)][m % cols];

            if (target === midValue) return true;
            else if (target < midValue) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
