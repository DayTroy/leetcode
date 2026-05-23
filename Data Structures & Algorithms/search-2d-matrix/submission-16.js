class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    // 30



    searchMatrix(matrix, target) {
        const k = matrix[0].length;
        const n = (matrix.length * k) - 1;
        let [l, r] = [0, n];
        
        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            const item = matrix[Math.floor(m / k)][m % k];

            if (item === target) return true;

            if (item > target) {
                r = m - 1;
            }

            if (item < target) {
                l = m + 1;
            }
        }

        return false;
    }
}
