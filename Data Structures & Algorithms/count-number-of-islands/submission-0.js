class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islandCount = 0;
        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === '1') {
                    islandCount++;
                    this.bfs(grid, r, c);
                }
            }
        }
        return islandCount;
    }
 
    bfs(grid, startRow, startCol) {
        const queue = [[startRow, startCol]];
        grid[startRow][startCol] = '0';

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currentRow, currentCol] = queue.shift();

            for (let [dr, dc] of directions) {
                let neighborRow = currentRow + dr;
                let neighborCol = currentCol + dc;

                if (
                    neighborRow >= 0 && neighborRow < grid.length &&
                    neighborCol >= 0 && neighborCol < grid[0].length &&
                    grid[neighborRow][neighborCol] === '1'
                ) {
                    grid[neighborRow][neighborCol] = '0';
                    queue.push([neighborRow, neighborCol]);
                }
            }
        }
    }
}
