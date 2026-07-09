class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let row = '';
            for (let j = 0; j < board[i].length; j++) {
                if (board[j][i] === '.') continue;
                if (row.includes(board[j][i])) return false;
                row += board[j][i];
            }
        }

        for (let i = 0; i < board.length; i++) {
            let col = '';
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === '.') continue;
                if (col.includes(board[i][j])) return false;
                col += board[i][j];
            }
        }

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let box = '';
                for (let k = 0; k < 3; k++) {
                    for (let m = 0; m < 3; m++) {
                        const cell = board[i + k][m + j];
                        if (cell === '.') continue;
                        if (box.includes(cell)) return false;
                        box += cell;
                    }
                }
            }
        }


        return true;
    }
}
