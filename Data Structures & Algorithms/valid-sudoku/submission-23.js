class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: board.length}, () => '');
        const cols = Array.from({length: board.length}, () => '');
        const boxes = Array.from({length: board.length}, () => '');

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                const k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (cell === '.') continue;
                if (cols[i].includes(cell) ||
                    rows[j].includes(cell) ||
                    boxes[k].includes(cell)) return false;

                cols[i] += cell;
                rows[j] += cell;
                boxes[k] += cell;
            }
        }

        return true;
    }
}
