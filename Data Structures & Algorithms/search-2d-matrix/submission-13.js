class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    // 30



    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length; 
        let l = 0, r = rows * cols - 1;
        while (l <= r) {
            const m = Math.floor((r + l) / 2);
            const item = matrix[Math.floor(m / cols)][m % cols];

            if (target === item) {
                return true;
            } else if (target < item) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
