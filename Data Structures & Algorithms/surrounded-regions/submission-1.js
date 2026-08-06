class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const m = board.length;
        const n = board[0].length;

        for (let r = 0; r < m; r++) {
            if (board[r][0] === 'O') this.bfs(board, r, 0);
            if (board[r][n - 1] === 'O') this.bfs(board, r, n - 1);
        }

        for (let c = 0; c < n; c++) {
            if (board[0][c] === 'O') this.bfs(board, 0, c);
            if (board[m - 1][c] === 'O') this.bfs(board, m - 1, c);
        }

        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (board[r][c] === 'O') {
                    board[r][c] = 'X'
                }
                if (board[r][c] === 'V') {
                    board[r][c] = 'O'
                }
            }
        }
    }

    bfs(board, r, c) {
        const queue = [[r, c]];
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const m = board.length;
        const n = board[0].length;

        board[r][c] = 'V'
    
        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < m &&
                    neighCol >= 0 && neighCol < n &&
                    board[neighRow][neighCol] === 'O') {
                        board[neighRow][neighCol] = 'V';
                        queue.push([neighRow, neighCol]);
                    }
            }
        }
    }
}
