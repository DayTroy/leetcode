class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    // 30



    searchMatrix(matrix, target) {
        let rows = matrix.length;
        let cols = matrix[0].length;
        let l = 0, r = rows * cols - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            
            const midVal = matrix[Math.floor(m / cols)][m % cols];
            
            if (target === midVal) {
                return true;
            } else if (target < midVal) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
