class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
     pacificAtlantic(heights) {
        const pacificQueue = [];
        const pacificVisited = new Set();

        const atlanticQueue = [];
        const atlanticVisited = new Set();

        for (let col = 0; col < heights[0].length; col++) {
            pacificQueue.push([0, col]);
            pacificVisited.add(`0-${col}`);

            atlanticQueue.push([heights.length - 1, col]);
            atlanticVisited.add(`${heights.length - 1}-${col}`);
        }

        for (let row = 0; row < heights.length; row++) {
            pacificQueue.push([row, 0]);
            pacificVisited.add(`${row}-0`);

            atlanticQueue.push([row, heights[0].length - 1]);
            atlanticVisited.add(`${row}-${heights[0].length - 1}`);
        }

        this.bfs(pacificQueue, pacificVisited, heights);
        this.bfs(atlanticQueue, atlanticVisited, heights);

        const res = [];
        for (let r = 0; r < heights.length; r++) {
            for (let c = 0; c < heights[0].length; c++) {
                if (pacificVisited.has(`${r}-${c}`) && atlanticVisited.has(`${r}-${c}`)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }

    bfs(queue, visited, heights) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < heights.length && 
                    neighCol >= 0 && neighCol < heights[0].length && 
                    heights[currRow][currCol] <= heights[neighRow][neighCol] && 
                    !visited.has(`${neighRow}-${neighCol}`)
                ) {
                    queue.push([neighRow, neighCol]);
                    visited.add(`${neighRow}-${neighCol}`);
                }
            }
        }
    }
}
