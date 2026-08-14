class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({ length: board.length }, () => new Set());
        const cols = Array.from({ length: board.length }, () => new Set());
        const boxs = Array.from({ length: board.length }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === '.' ) continue;

                const k = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r].has(val) || 
                    cols[c].has(val) ||
                    boxs[k].has(val)) return false;

                rows[r].add(val);
                cols[c].add(val);
                boxs[k].add(val);
            }
        }

        return true;
    }
}
