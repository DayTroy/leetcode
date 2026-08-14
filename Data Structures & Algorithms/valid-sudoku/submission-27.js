class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < 9; r++) {
            let row = '';
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') continue;
                if (row.includes(board[r][c])) return false;
                row += board[r][c];
            }
        }

        for (let r = 0; r < 9; r++) {
            let col = '';
            for (let c = 0; c < 9; c++) {
                if (board[c][r] === '.') continue;
                if (col.includes(board[c][r])) return false;
                col += board[c][r];
            }
        }

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let box = '';

                for (let m = 0; m < 3; m++) {
                    for (let k = 0; k < 3; k++) {
                        const item = board[i + m][j + k];
                        if (item === '.') continue;
                        if (box.includes(item)) return false;
                        box += item;
                    }
                }
            }
        }

        return true;
    }
}
