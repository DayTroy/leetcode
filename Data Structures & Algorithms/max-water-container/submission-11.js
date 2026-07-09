class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;

        let l = 0;
        let r = heights.length - 1;

        while (l < r) {
            const height = Math.min(heights[r], heights[l]);
            max = Math.max(max, height * (r - l));

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
