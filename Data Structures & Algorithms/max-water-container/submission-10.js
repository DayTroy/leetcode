class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                const height = Math.min(heights[i], heights[j]);
                max = Math.max(max, height * (j - i));
            }
        }

        return max;
    }
}
