public class Solution {
    public int OrangesRotting(int[][] grid) {
        Queue<(int qRow, int qCol, int qTime)> queue = new();
        int freshFruits = 0;

        for (int r = 0; r < grid.Length; r++) {
            for (int c = 0; c < grid[0].Length; c++) {
                if (grid[r][c] == 1) {
                    freshFruits++;
                }
                if (grid[r][c] == 2)
                queue.Enqueue((r, c, 0));
            }
        }
        int time = BFS(grid, queue, ref freshFruits);

        return freshFruits == 0 ? time : -1;
    }

    public int BFS(int[][] grid, Queue<(int qRow, int qCol, int qTime)> queue, ref int fresh) {
        int time = 0;

        int[][] directions = new int[][] 
        {
            new int[] { -1, 0 },
            new int[] { 1, 0 },
            new int[] { 0, -1 },
            new int[] { 0, 1 },
        };

        while (queue.Count > 0) {
            var (currRow, currCol, currTime) = queue.Dequeue();

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
                    queue.Enqueue((neighRow, neighCol, currTime + 1));
                    time = currTime + 1;
                    grid[neighRow][neighCol] = 2;
                    fresh--;
                }
            }
        }

        return time;
    }
}
