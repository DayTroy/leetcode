class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshFruits = 0;
        const queue = [];

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    freshFruits++;
                }
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0]);
                }
            }
        }

        return this.bfs(grid, queue, freshFruits);  
    }

    bfs(grid, queue, freshFruits) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        let minutes = 0;
        while (queue.length > 0) {
            const [currRow, currCol, currMinutes] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < grid.length &&
                    neighCol >= 0 && neighCol < grid[0].length &&
                    grid[neighRow][neighCol] === 1) {
                        grid[neighRow][neighCol] = 2;
                        freshFruits--;
                        minutes = currMinutes + 1;
                        queue.push([neighRow, neighCol, currMinutes + 1]);
                    }
            }
        }

        return freshFruits === 0 ? minutes : -1;;
    }
}
