class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            let start = i;

            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
                const [stackInd, stackVal] = stack.pop();
                maxArea = Math.max(maxArea, stackVal * (i - stackInd));
                start = stackInd;
            }

            stack.push([start, heights[i]]);
        }

        for (let i = 0; i < stack.length; i++) {
            const [stackInd, stackVal] = stack[i];
            // maxArea = Math.max(maxArea, stackVal * (heights.length - stackInd));
            maxArea = Math.max(maxArea, stack[i][1] * (heights.length - stack[i][0]))
        }

        return maxArea;
    }
}
