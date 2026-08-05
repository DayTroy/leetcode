class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
     pacificAtlantic(heights) {
        const pacific = [];
        const atlantic = [];
        const pacificVisited = new Set();
        const atlanticVisited = new Set();
        const res = [];
        const n = heights.length, m = heights[0].length;

        for (let i = 0; i < m; i++) {
            pacific.push([0, i]);
            pacificVisited.add(`${0}-${i}`);
            atlantic.push([n - 1, i]);
            atlanticVisited.add(`${n - 1}-${i}`);
        }

        for (let i = 0; i < n; i++) {
            pacific.push([i, 0]);
            pacificVisited.add(`${i}-${0}`);
            atlantic.push([i, m - 1]);
            atlanticVisited.add(`${i}-${m - 1}`);
        }

        this.bfs(heights, pacific, pacificVisited);
        this.bfs(heights, atlantic, atlanticVisited);

        for (let r = 0; r < n; r++) {
            for (let c = 0; c < m; c++) {
                if (pacificVisited.has(`${r}-${c}`) && atlanticVisited.has(`${r}-${c}`)) {
                    res.push([r, c]);
                }
            }
        }

        return res;
     }

     bfs(heights, queue, visited) {
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        while (queue.length > 0) {
            const [currRow, currCol] = queue.shift();

            for (const [dirRow, dirCol] of directions) {
                const neighRow = currRow + dirRow;
                const neighCol = currCol + dirCol;

                if (
                    neighRow >= 0 && neighRow < heights.length && 
                    neighCol >= 0 && neighCol < heights[0].length &&
                    !visited.has(`${neighRow}-${neighCol}`) && 
                    heights[neighRow][neighCol] >= heights[currRow][currCol]
                ) {
                    queue.push([neighRow, neighCol]);
                    visited.add(`${neighRow}-${neighCol}`);
                }
            }
        }
     }
}
