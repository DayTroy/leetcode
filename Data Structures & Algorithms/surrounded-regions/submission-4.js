class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const queue = [];
        const visited = new Set();
        const ROWS = board.length;
        const COLS = board[0].length;

        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === "O") {
                queue.push([r, 0]);
                visited.add(`${r}-${0}`)
            }
            if (board[r][COLS - 1] === "O") {
                queue.push([r, COLS - 1])
                visited.add(`${r}-${COLS - 1}`)
            }
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === "O") {
                queue.push([0, c])
                visited.add(`${0}-${c}`);
            }
            if (board[ROWS - 1][c] === "O") {
                queue.push([ROWS - 1, c]);
                visited.add(`${ROWS - 1}-${c}`);
            }
        }

        this.bfs(queue, visited, board);

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O' && !visited.has(`${r}-${c}`)) {
                    board[r][c] = 'X';
                }
            }
        }

        return board;
    }

    bfs(queue, visited, board) {
        const directions = [ [-1, 0], [1, 0], [0, -1], [0, 1] ];
        const ROWS = board.length;
        const COLS = board[0].length;

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();
            
            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < ROWS &&
                    neighCol >= 0 && neighCol < COLS &&
                    board[neighRow][neighCol] === "O" &&
                    !visited.has(`${neighRow}-${neighCol}`)
                ) {
                    queue.push([neighRow, neighCol])
                    visited.add(`${neighRow}-${neighCol}`);
                }
            }
        }
    }
}
