class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // [[1,2,4,8],[10,11,12,13],[14,20,30,40]]
    // 30



    searchMatrix(matrix, target) {
        let l = 0, r = matrix.length - 1;
        let targetArr = [];

        while (l <= r) {
            const m = Math.floor((r + l) / 2);

            if (target >= matrix[m][0] && target <= matrix[m][matrix[m].length - 1]) {
                targetArr = matrix[m];
                break;
            }

            if (target < matrix[m][0]) {
                r = m - 1;
            } else if (target > matrix[m][matrix[m].length - 1]) {
                l = m + 1;
            }
        }

        if (targetArr.length === 0) return false;

        return targetArr.indexOf(target) !== -1 ? true : false;
    }
}
