class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const height = Math.min(...heights.slice(i, j + 1))
                maxArea = Math.max(maxArea, height * ((j - i) + 1));
            }
            maxArea = Math.max(maxArea, heights[i]);
        }

        return maxArea;


    }
}
