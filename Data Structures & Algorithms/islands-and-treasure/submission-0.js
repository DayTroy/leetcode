class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const queue = [];

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c, 0]);
                }
            }
        }

        this.bfs(grid, queue);

        return grid;
    }

    bfs(grid, queue) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            let [currR, currC, distance] = queue.shift();

            for (let [rowD, colD] of directions) {
                const neighborRow = currR + rowD;
                const neighborCol = currC + colD;

                const nextDistance = distance + 1;

                if (neighborRow >= 0 && neighborRow < grid.length && 
                    neighborCol >= 0 && neighborCol < grid[0].length ) {
                    if (grid[neighborRow][neighborCol] === 2147483647) {
                        grid[neighborRow][neighborCol] = nextDistance;
                        queue.push([neighborRow, neighborCol, nextDistance]);
                    }
                }
            }
        }
    }
}
