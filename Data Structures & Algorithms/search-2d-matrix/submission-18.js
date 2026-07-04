class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        const rows = matrix.length;
        const cols = matrix[0].length;
        let r = (rows * cols) - 1;

        // m = 0 + 11 / 2 ==== 5

        // 13, index = [1][3];

        while (l <= r) {
            let m = Math.floor((r + l) / 2);
            const item = matrix[Math.floor(m / cols)][Math.floor(m % cols)];

            if (target > item) {
                l = m + 1;
            } else if (target < item) {
                r = m - 1;
            } else {
                return true;
            }

        }

        return false;
    }
}
