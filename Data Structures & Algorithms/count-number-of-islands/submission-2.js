class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const visited = new Set();
        let count = 0;

        for (let r = 0; r < grid.length; r++) {
            for (let c = 0; c < grid[r].length; c++) {
                if (grid[r][c] === '1' && !visited.has(`${r}-${c}`)) {
                    this.bfs(grid, visited, r, c);
                    count++;
                }
            }
        }

        return count;
    }

    bfs(grid, visited, row, col) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        const queue = [[row, col]];

        visited.add(`${row}-${col}`)

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (neighRow >= 0 && neighRow < grid.length && 
                    neighCol >= 0 && neighCol < grid[0].length && 
                    grid[neighRow][neighCol] === '1' && !visited.has(`${neighRow}-${neighCol}` )) {
                        queue.push([neighRow, neighCol]);
               visited.add(`${neighRow}-${neighCol}`);
                    }
            }
        }
    }
 }
