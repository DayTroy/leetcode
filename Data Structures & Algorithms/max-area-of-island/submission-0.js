class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1) {
                    maxArea = Math.max(maxArea, this.bfs(grid,r,c));
                }
            }
        }

        return maxArea;
    }

    bfs(grid, row, col) {
        const queue = [[row, col]];
        grid[row][col] = 0;
        let cellsToNull = 1;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();
            for (let [rowDir, colDir] of directions) {
                const neighborRow = currentRow + rowDir;
                const neighborCol = currentCol + colDir;

                if (neighborRow >= 0 && neighborRow < grid.length &&
                neighborCol >= 0 && neighborCol < grid[0].length &&
                grid[neighborRow][neighborCol] === 1) {
                    grid[neighborRow][neighborCol] = 0;
                    cellsToNull++;
                    queue.push([neighborRow, neighborCol]);
                }
            }
        }

        return cellsToNull;
    }
}
