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
        // const m = matrix.length;
        // const n = matrix[0].length;
        let l = 0;
        let r = matrix.length - 1;
        
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            // let midVal = matrix[Math.floor(mid / n)][mid % n];
            
            if (matrix[mid] === target) {
                return true;
            } else if (matrix[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}
