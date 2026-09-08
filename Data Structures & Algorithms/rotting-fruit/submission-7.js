class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshFruits = 0;
        const rows = grid.length;
        const cols = grid[0].length;
        const queue = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0]);
                } else if (grid[r][c] === 1) {
                    freshFruits++;
                }
            }
        }

        if (freshFruits === 0) return 0;

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let maxMinutes = 0;

        while (queue.length > 0) {
            const [currRow, currCol, minutes] = queue.shift();
            maxMinutes = minutes;

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < rows &&
                    neighCol >= 0 && neighCol < cols &&
                    grid[neighRow][neighCol] === 1
                ) {
                    grid[neighRow][neighCol] = 2;
                    freshFruits--;
                    queue.push([neighRow, neighCol, minutes + 1]);
                }
            }
        }

        return freshFruits === 0 ? maxMinutes : -1;
    }
}
