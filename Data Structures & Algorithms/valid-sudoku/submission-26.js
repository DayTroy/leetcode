class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: board.length }, () => '');
        const cols = Array.from({ length: board.length }, () => '');
        const boxs = Array.from({ length: board.length }, () => '');

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                if (cell === '.') continue;
                const m = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[j].includes(cell) ||
                    cols[i].includes(cell) ||
                    boxs[m].includes(cell)
                    ) return false;
                rows[j] += cell;
                cols[i] += cell;
                boxs[m] += cell;
            }
        }

        return true;
    }
}
