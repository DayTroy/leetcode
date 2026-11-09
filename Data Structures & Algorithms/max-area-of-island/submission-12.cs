public class Solution {
    public int MaxAreaOfIsland(int[][] grid) {
        int maxArea = 0;

        for (int r = 0; r < grid.Length; r++) {
            for (int c = 0; c < grid[r].Length; c++) {
                if (grid[r][c] == 1) {
                    maxArea = Math.Max(maxArea, BFS(grid, r, c));
                }
            }
        }

        return maxArea;
    }

    public int BFS(int[][] grid, int row, int col) {
        int area = 1;
        int[][] directions = new int[][] {
            new int[] { -1, 0 },
            new int[] { 1, 0 },
            new int[] { 0, 1 },
            new int[] { 0, -1 },
        };
        Queue<(int qRow, int qCol)> queue = new();
        queue.Enqueue((row, col));
        grid[row][col] = 0;

        while (queue.Count > 0) {
            var (currRow, currCol) = queue.Dequeue();
            foreach (int[] direction in directions) {
                int neighRow = currRow + direction[0];
                int neighCol = currCol + direction[1];

                if 
                (
                    neighRow >= 0 && neighRow < grid.Length &&
                    neighCol >= 0 && neighCol < grid[0].Length &&
                    grid[neighRow][neighCol] == 1
                ) 
                {
                    grid[neighRow][neighCol] = 0;
                    ++area;
                    queue.Enqueue((neighRow, neighCol));
                }
            }
        }

        return area;
    }
}
