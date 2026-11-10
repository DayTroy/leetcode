public class Solution {
    public void islandsAndTreasure(int[][] grid) {
        Queue<(int qRow, int qCol)> queue = new();

        for (int r = 0; r < grid.Length; r++) {
            for (int c = 0; c < grid[r].Length; c++) {
                if (grid[r][c] == 0) {
                    queue.Enqueue((r, c));
                }
            }
        }

        BFS(grid, queue);

    }

    public void BFS(int[][] grid, Queue<(int qRow, int qCol)> queue) {
        int[][] directions = new int[][] {
            new int[] { -1, 0 },
            new int[] { 1, 0 },
            new int[] { 0, -1 },
            new int[] { 0, 1 },
        };

        while (queue.Count > 0) {
            var (currRow, currCol) = queue.Dequeue();

            foreach (int[] direction in directions) {
                int neighRow = currRow + direction[0];
                int neighCol = currCol + direction[1];

                if 
                (
                    neighRow >= 0 && neighRow < grid.Length &&
                    neighCol >= 0 && neighCol < grid[0].Length &&
                    grid[neighRow][neighCol] == 2147483647
                )
                {
                    grid[neighRow][neighCol] = grid[currRow][currCol] + 1;
                    queue.Enqueue((neighRow, neighCol));
                }
            }
        }
    }
}
