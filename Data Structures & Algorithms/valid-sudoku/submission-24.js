class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            let rows = '';
            for (let j = 0; j < 9; j++) {
                const row = board[j][i];
                if (row === '.') continue;
                if (rows.includes(row)) return false;
                rows += row;
            }
        }

        for (let i = 0; i < 9; i++) {
            let cols = '';
            for (let j = 0; j < 9; j++) {
                const col = board[i][j];
                if (col === '.') continue;
                if (cols.includes(col)) return false;
                cols += col;
            }
        }

        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                let boxes = '';

                for (let m = 0; m < 3; m++) {
                    for (let k = 0; k < 3; k++) {
                        const cell = board[i + m][j + k];
                        if (cell === '.') continue;
                        if (boxes.includes(cell)) return false;
                        boxes += cell;
                    }
                }                
            }
        }

        return true;
    }
}
