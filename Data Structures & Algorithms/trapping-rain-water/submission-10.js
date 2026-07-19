class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    // [0,2,0,3,1,0,1,3,2,1]


    //. l                 r
    // [2,2,2,3,3,3,3,3,3,3]
    // [3,3,3,3,3,3,3,3,3,3]
    // [] 
    trap(height) {
        const leftMax  = new Array(height.length).fill(0);
        const rightMax = new Array(height.length).fill(0);

        leftMax[0] = height[0];
        for (let i = 1; i < height.length; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }

        rightMax[height.length - 1] = height[height.length - 1];
        for (let i = height.length - 2; i >= 0; i--) {
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }

        let area = 0;

        for (let i = 0; i < height.length; i++) {
            let waters = Math.min(leftMax[i], rightMax[i]) - height[i];
            if (waters > 0) {
                area += waters;
            }
        }

        return area;
    }
}
