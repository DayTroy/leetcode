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
            const [currRow, currCol, path] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < grid.length &&
                    neighCol >= 0 && neighCol < grid[0].length &&
                    grid[neighRow][neighCol] === 2147483647
                ) {
                    grid[neighRow][neighCol] = path + 1;
                    queue.push([neighRow, neighCol, path + 1]);
                }
            }
        }
    }
}
