public class Solution {
    public void Solve(char[][] board) {
        int N = board.Length;
        int M = board[0].Length;

        for (int i = 0; i < N; i++) {
            if (board[i][0] == 'O') DFS(i, 0, board);
            if (board[i][M - 1] == 'O') DFS(i, M - 1, board);
        }

        for (int j = 0; j < M; j++) {
            if (board[0][j] == 'O') DFS(0, j, board);
            if (board[N - 1][j] == 'O') DFS(N - 1, j, board);
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

    public void DFS(int row, int col, char[][] board) {
        if 
        (
            row < 0 || row >= board.Length ||
            col < 0 || col >= board[0].Length ||
            board[row][col] != 'O'
        ) 
        {
            return;
        }

        board[row][col] = 'U';
        DFS(row - 1, col, board);
        DFS(row + 1, col, board);
        DFS(row, col - 1, board);
        DFS(row, col + 1, board);
    }
}
