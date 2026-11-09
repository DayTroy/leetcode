public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        int maxArea = 0;

        for (int r = 0; r < grid.Length; r++) {
            for (int c = 0; c < grid[r].Length; c++) {
                if (grid[r][c] == 1) {
                    maxArea = Math.Max(maxArea, DFS(grid, r, c));
                }
            }
        }

        return maxArea;
    }

    public int DFS(int[][] grid, int row, int col) {
        if 
        (
            row < 0 || row >= grid.Length ||
            col < 0 || col >= grid[0].Length ||
            grid[row][col] == 0
        ) {
            return 0;
        }

        grid[row][col] = 0;

        return 1 + DFS(grid, row - 1, col) + 
               DFS(grid, row + 1, col) +
               DFS(grid, row, col - 1) +
               DFS(grid, row, col + 1);
    }
}
