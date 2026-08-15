class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0, r = heights.length - 1;

        while (l < r) {
            const minHeight = Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, minHeight * (r - l));

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
