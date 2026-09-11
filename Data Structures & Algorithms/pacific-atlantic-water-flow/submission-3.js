class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
     pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const pacificQueue = [];
        const pacificVisited = new Set();

        const atlanticQueue = [];
        const atlanticVisited = new Set();

        for (let r = 0; r < ROWS; r++) {
            pacificQueue.push([r, 0]);
            pacificVisited.add(`${r}-0`);

            atlanticQueue.push([r, COLS - 1]);
            atlanticVisited.add(`${r}-${COLS - 1}`);
        }

        for (let c = 0; c < COLS; c++) {
            pacificQueue.push([0, c]);
            pacificVisited.add(`0-${c}`);

            atlanticQueue.push([ROWS - 1, c]);
            atlanticVisited.add(`${ROWS - 1}-${c}`);
        }

        this.bfs(pacificQueue, pacificVisited, heights);
        this.bfs(atlanticQueue, atlanticVisited, heights);

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacificVisited.has(`${r}-${c}`) && atlanticVisited.has(`${r}-${c}`)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }

    bfs(queue, visited, heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;

        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < ROWS &&
                    neighCol >= 0 && neighCol < COLS &&
                    heights[currRow][currCol] <= heights[neighRow][neighCol] &&
                    !visited.has(`${neighRow}-${neighCol}`)
                ) {
                    visited.add(`${neighRow}-${neighCol}`);
                    queue.push([neighRow, neighCol]);
                }
            }
        }
    }
}
