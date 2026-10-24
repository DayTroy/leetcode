public class Solution {
    public bool SearchMatrix(int[][] matrix, int target) {
        int l = 0;
        int rows = matrix.Length;
        int cols = matrix[0].Length;
        int r = rows * cols - 1;

        while (l <= r) {
            int m = (r + l) / 2;

            int item = matrix[m / cols][m % cols];
            if (item > target) r = m - 1;
            else if (item < target) l = m + 1;
            else return true;
        }
        return false;
    }
}
