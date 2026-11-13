public class Solution {
    readonly (int, int)[] directions = new[]
    {
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1),
    };

    public void Solve(char[][] board) {
        int N = board.Length;
        int M = board[0].Length;

        Queue<(int qRow, int qCol)> queue = new();

        for (int i = 0; i < N; i++) {
            if (board[i][0] == 'O') {
                queue.Enqueue((i, 0));
                board[i][0] = 'U';
            }

            if (board[i][M - 1] == 'O') {
                queue.Enqueue((i, M - 1));
                board[i][M - 1] = 'U';
            }
        }

        for (int i = 0; i < M; i++) {
            if (board[0][i] == 'O') {
                queue.Enqueue((0, i));
                board[0][i] = 'U';
            }

            if (board[N - 1][i] == 'O') {
                queue.Enqueue((N - 1, i));
                board[N - 1][i] = 'U';
            }
        }

        while (queue.Count > 0) {
            var (currRow, currCol) = queue.Dequeue();

            foreach (var (dirRow, dirCol) in directions) {
                int neighRow = currRow + dirRow;
                int neighCol = currCol + dirCol;

                if 
                (
                    neighRow >= 0 && neighRow < board.Length &&
                    neighCol >= 0 && neighCol < board[0].Length &&
                    board[neighRow][neighCol] == 'O'
                )
                {
                    board[neighRow][neighCol] = 'U';
                    queue.Enqueue((neighRow, neighCol));
                }
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (board[i][j] == 'U') {
                    board[i][j] = 'O';
                } else if (board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
            }
        }
    }
}
