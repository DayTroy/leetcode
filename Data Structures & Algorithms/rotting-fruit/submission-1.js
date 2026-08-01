class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = [];
        let freshFruits = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0])
                }
                if (grid[r][c] === 1) {
                    freshFruits += 1;
                }
            }
        }

        return this.bfs(grid, queue, freshFruits);
    }

    bfs(grid, queue, freshFruits) {
        let minutes = 0;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currRow, currCol, currMinutes] = queue.shift();
            
            for (const [directionRow, directionCol] of directions) {
                const neighborRow = currRow + directionRow;
                const neighborCol = currCol + directionCol;

                if (neighborRow >= 0 && neighborRow < grid.length &&
                    neighborCol >= 0 && neighborCol < grid[0].length &&
                    grid[neighborRow][neighborCol] === 1) {
                        grid[neighborRow][neighborCol] = 2;
                        queue.push([neighborRow, neighborCol, currMinutes + 1]);
                        freshFruits--;
                        minutes = currMinutes + 1;
                    }
            }
        }

        return freshFruits === 0 ? minutes : -1;
    }
}
