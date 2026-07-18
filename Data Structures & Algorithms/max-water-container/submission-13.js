class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0, r = heights.length - 1;

        while (l < r) {
            maxArea = Math.max(maxArea, (r - l) * Math.min(heights[r], heights[l]));

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
