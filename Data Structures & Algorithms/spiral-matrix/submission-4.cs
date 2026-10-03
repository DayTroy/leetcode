public class Solution {
    public List<int> SpiralOrder(int[][] matrix) {
        int left = 0, top = 0;
        int bottom = matrix.Length, right = matrix[0].Length;
        List<int> result = new List<int>();

        while (left < right && top < bottom) {
            for (int i = left; i < right; i++) {
                result.Add(matrix[top][i]);
            }
            top++;

            for (int i = top; i < bottom; i++) {
                result.Add(matrix[i][right - 1]);
            }
            right--;

            if (left >= right || top >= bottom) break;

            for (int i = right - 1; i >= left; i--) {
                result.Add(matrix[bottom - 1][i]);
            }
            bottom--;

            for (int i = bottom - 1; i >= top; i--) {
                result.Add(matrix[i][left]);
            }
            left++;
        }

        return result;
    }
}
