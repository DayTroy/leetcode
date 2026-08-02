class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
     pacificAtlantic(heights) {
        if (!heights || heights.length === 0) return [];
        
        const ROWS = heights.length;
        const COLS = heights[0].length;
        
        const pacQueue = [];
        const atlQueue = [];
        
        const pacVisited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atlVisited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        
        for (let r = 0; r < ROWS; r++) {
            pacQueue.push([r, 0]);
            atlQueue.push([r, COLS - 1]);
            pacVisited[r][0] = true;
            atlVisited[r][COLS - 1] = true;
        }
        
        for (let c = 0; c < COLS; c++) {
            pacQueue.push([0, c]);
            atlQueue.push([ROWS - 1, c]);
            pacVisited[0][c] = true;
            atlVisited[ROWS - 1][c] = true;
        }
        
        this.bfs(heights, pacQueue, pacVisited);
        this.bfs(heights, atlQueue, atlVisited);
        
        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacVisited[r][c] && atlVisited[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        
        return res;
    };

    bfs(heights, queue, visited) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        while (queue.length > 0) {
            const [currR, currC] = queue.shift();
            
            for (const [dr, dc] of directions) {
                const newR = currR + dr;
                const newC = currC + dc;
                
                if (newR >= 0 && newR < ROWS && newC >= 0 && newC < COLS) {
                    if (!visited[newR][newC] && heights[newR][newC] >= heights[currR][currC]) {
                        visited[newR][newC] = true;
                        queue.push([newR, newC]);
                    }
                }
            }
        }
    };
}
