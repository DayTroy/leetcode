class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // [1,7,2,5,4,7,3,6]
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;
        let maxArea = 0;

        while (l < r) {
            const h = Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, h * (r - l));

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
