class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let freshFruits = 0;
        const queue = [];
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    freshFruits++;
                }
                if (grid[r][c] === 2) {
                    queue.push([r, c, 0]);
                    visited.add(`${r}-${c}`);
                }
            }
        }

        return this.bfs(grid, queue, freshFruits, visited);  
    }

    bfs(grid, queue, freshFruits, visited) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        let minutes = 0;
        while (queue.length > 0) {
            const [currRow, currCol, currMinutes] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < grid.length &&
                    neighCol >= 0 && neighCol < grid[0].length &&
                    !visited.has(`${neighRow}-${neighCol}`) &&
                    grid[neighRow][neighCol] === 1) {
                        visited.add(`${neighRow}-${neighCol}`);
                        freshFruits--;
                        minutes = currMinutes + 1;
                        queue.push([neighRow, neighCol, currMinutes + 1]);
                    }
            }
        }

        return freshFruits === 0 ? minutes : -1;;
    }
}
