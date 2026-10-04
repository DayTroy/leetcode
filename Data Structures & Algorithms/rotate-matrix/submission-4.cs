public class Solution {
    public void Rotate(int[][] matrix) {
        for (int i = 0; i < matrix.Length; i++) {
            for (int j = i; j < matrix.Length; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        for (int i = 0; i < matrix.Length; i++) {
            Array.Reverse(matrix[i]);
        }
    }
}
