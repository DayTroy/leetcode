class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // [1,7,2,5,4,7,3,6]
    maxArea(heights) {
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const computed = Math.min(heights[j], heights[i]) * (j - i);
                maxArea = Math.max(maxArea, computed);
            }
        }

        return maxArea;
    }
}
