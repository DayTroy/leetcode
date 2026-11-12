public class Solution {
    readonly int[][] Directions = new int[][] {
        new int[] { -1, 0 },
        new int[] { 1, 0 },
        new int[] { 0, -1 },
        new int[] { 0, 1 },
    };

    public List<List<int>> PacificAtlantic(int[][] heights) {
        HashSet<string> pacificVisited = new();
        HashSet<string> atlanticVisited = new();
        Queue<(int qRow, int qCol)> pacificQueue = new();
        Queue<(int qRow, int qCol)> atlanticQueue = new();
        List<List<int>> result = new();

        int N = heights.Length;
        int M = heights[0].Length;

        for (int i = 0; i < M; i++) {
            pacificVisited.Add($"{0}-{i}");
            pacificQueue.Enqueue((0, i));
            atlanticVisited.Add($"{N - 1}-{i}");
            atlanticQueue.Enqueue((N - 1, i));
        }

        for (int i = 0; i < N; i++) {
            pacificVisited.Add($"{i}-{0}");
            pacificQueue.Enqueue((i, 0));
            atlanticVisited.Add($"{i}-{M - 1}");
            atlanticQueue.Enqueue((i, M - 1));
        }

        BFS(heights, pacificVisited, pacificQueue);
        BFS(heights, atlanticVisited, atlanticQueue);

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (pacificVisited.Contains($"{i}-{j}") && atlanticVisited.Contains($"{i}-{j}")) {
                    result.Add(new List<int>(){ i, j });
                }
            }
        }

        return result;
    }

    public void BFS(int[][] heights, HashSet<string> visited, Queue<(int qRow, int qCol)> queue) {
        while (queue.Count > 0) {
            var (currRow, currCol) = queue.Dequeue();

            foreach (int[] direction in Directions) {
                int neighRow = currRow + direction[0];
                int neighCol = currCol + direction[1];

                if 
                (
                    neighRow >= 0 && neighRow < heights.Length &&
                    neighCol >= 0 && neighCol < heights[0].Length &&
                    heights[currRow][currCol] <= heights[neighRow][neighCol] && 
                    !visited.Contains($"{neighRow}-{neighCol}") 
                ) 
                {
                    visited.Add($"{neighRow}-{neighCol}");
                    queue.Enqueue((neighRow, neighCol));
                }
            }
        }
    }
}
