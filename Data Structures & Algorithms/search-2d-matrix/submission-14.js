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
        let [l, r] = [0, matrix.length - 1];

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (matrix[m] === target) return true;

            if (matrix[m] > target) {
                r = m - 1;
            }

            if (matrix[m] < target) {
                l = m + 1;
            }
        }

        return false;
    }
}
