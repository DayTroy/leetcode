class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        const visited = new Set();

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === 1 && !visited.has(`${r}-${c}`)) {
                    maxArea = Math.max(maxArea, this.bfs(grid, visited, r, c));
                    visited.add(`${r}-${c}`)
                }
            }
        }

        return maxArea;
    }

    bfs(grid, visited, row, col) {
        const queue = [[row, col]];
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        let count = 1;
        visited.add(`${row}-${col}`)

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < grid.length && 
                    neighCol >= 0 && neighCol < grid[0].length &&
                    grid[neighRow][neighCol] === 1 &&
                    !visited.has(`${neighRow}-${neighCol}`)) {
                        count++;
                        visited.add(`${neighRow}-${neighCol}`)
                        queue.push([neighRow, neighCol]);
                    }
            }
        }

        return count;
    }
}
