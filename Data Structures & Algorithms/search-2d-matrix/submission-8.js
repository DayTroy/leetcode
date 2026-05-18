class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    // 30



    searchMatrix(matrix, target) {
        matrix = matrix.flat();
        let l = 0, r = matrix.length - 1;
        while (l <= r) {
            const m = Math.floor((r + l) / 2);

            if (target === matrix[m]) {
                return true;
            } else if (target > matrix[m]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return false;
    }
}
