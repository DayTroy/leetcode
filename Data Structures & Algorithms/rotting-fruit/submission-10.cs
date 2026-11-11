public class Solution {
    private static readonly (int r, int c)[] Directions = new[] {
        (-1, 0), (1, 0), (0, -1), (0, 1)
    };

    public int OrangesRotting(int[][] grid) {
        Queue<(int qRow, int qCol)> queue = new();
        int freshFruits = 0;

        for (int r = 0; r < grid.Length; r++) {
            for (int c = 0; c < grid[0].Length; c++) {
                if (grid[r][c] == 1) freshFruits++;
                if (grid[r][c] == 2) queue.Enqueue((r, c));
            }
        }
        int minutes = BFS(grid, queue, ref freshFruits);

        return freshFruits == 0 ? minutes : -1;
    }

    public int BFS(int[][] grid, Queue<(int qRow, int qCol)> queue, ref int fresh) {
        int minutes = 0;
        while (queue.Count > 0 && fresh > 0) {
            int size = queue.Count;
            for (int i = 0; i < size; i++) {
                var (currRow, currCol) = queue.Dequeue();
                foreach (var (dirRow, dirCol) in Directions) {
                    int neighRow = currRow + dirRow;
                    int neighCol = currCol + dirCol;

                    if 
                    (
                        neighRow >= 0 && neighRow < grid.Length &&
                        neighCol >= 0 && neighCol < grid[0].Length &&
                        grid[neighRow][neighCol] == 1
                    ) 
                    {
                        grid[neighRow][neighCol] = 2;
                        fresh--;
                        queue.Enqueue((neighRow, neighCol));
                    }
                }
            }
            minutes++;
        }

        return minutes;
    }
}
