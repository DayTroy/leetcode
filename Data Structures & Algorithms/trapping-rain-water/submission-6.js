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
        let l = 0;
        let r = height.length - 1;
        let leftMax = 0;
        let rightMax = 0;
        let totalWater = 0;

        while (l < r) {
            leftMax = Math.max(leftMax, height[l]);
            rightMax = Math.max(rightMax, height[r]);

            if (leftMax < rightMax) {
                leftMax = Math.max(leftMax, height[l]);
                totalWater += Math.min(leftMax, rightMax) - height[l];
                l++;
                
            } else {
                rightMax = Math.max(rightMax, height[r]);
                totalWater += Math.min(leftMax, rightMax) - height[r];
                r--;
            }
        }

        return totalWater;
    }
}
