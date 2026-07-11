class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const lessFromLeft = new Array(n);
        const lessFromRight = new Array(n);
        
        lessFromLeft[0] = -1;
        for (let i = 1; i < n; i++) {
            let p = i - 1;
            while (p >= 0 && heights[p] >= heights[i]) {
                p = lessFromLeft[p];
            }
            lessFromLeft[i] = p;
        }
        
        lessFromRight[n - 1] = n;
        for (let i = n - 2; i >= 0; i--) {
            let p = i + 1;

            while (p < n && heights[p] >= heights[i]) {
                p = lessFromRight[p];
            }
            lessFromRight[i] = p;
        }
        
        let maxArea = 0;
        for (let i = 0; i < n; i++) {
            const width = lessFromRight[i] - lessFromLeft[i] - 1;
            const area = heights[i] * width;
            maxArea = Math.max(maxArea, area);
        }
        
        return maxArea;
    }
}
